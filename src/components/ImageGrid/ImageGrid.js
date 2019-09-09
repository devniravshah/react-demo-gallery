import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages, likeImage, dislikeImage } from '../../actions';
import './styles.css';
import { Modal, Icon , Pagination } from 'antd';

class ImageGrid extends Component {
    state = {
        filteredImages: [],
        visible: false,
        selectedImage: {}
    }

    showModal = (id) => {
        const selected = this.props.images.find(x => x.id === id)
        this.setState({
        visible: true,
        selectedImage: selected
        });
    };
    
    handleCancel = e => {
    this.setState({
        visible: false,
    });
    };

    likeThisImage = id => {
    this.props.likeImage(id)
    }

    dislikeThisImage = id => {
    this.props.dislikeImage(id)
    }

    onChange = (e) => {
    this.setState({filteredImages: this.props.images.filter(image => {
        return image.albumId === e
    })});
    }

    componentDidMount() {
        this.props.loadImages();
    }
    
    render() {
        const { error, images } = this.props;
        const {filteredImages, selectedImage} = this.state;
        return (
            <div className="content">
                <div>
                    <Pagination onChange={(e) => this.onChange(e)} pageSize={50} total={5000} />
                </div>
                <section className="grid">
                        {(filteredImages.length ? filteredImages : images).slice(0,50).map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.thumbnailUrl}
                                    className="image-thumbnail"
                                    alt={image.title}
                                    onClick={() => this.showModal(image.id)}
                                />
                                {this.props.like.includes(image.id) ? <Icon onClick={() => this.dislikeThisImage(image.id)} className="icon" type="heart" theme="filled" style={{color:"red"}} />:
                                  <Icon onClick={() => this.likeThisImage(image.id)} className="icon" type="heart" theme="twoTone" twoToneColor="#bababa" />
                                }
                            </div>
                        ))}  
                </section>
                <Modal
                title={null}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer= {null}
                width= "100%"
                style={{top: "0px"}}
                >
                <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    style={{height: "93vh", width: "100%"}}
                />
                </Modal>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ images, error, like }) => ({
    images,
    error,
    like,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    likeImage: (e) => dispatch(likeImage(e)),
    dislikeImage: (e) => dispatch(dislikeImage(e)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
