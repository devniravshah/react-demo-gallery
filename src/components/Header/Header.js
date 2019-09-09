import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Badge, Popover } from 'antd';
import './styles.css';

class Header extends Component {
render() {
    let ids = this.props.like
    let filteredImages = this.props.images.filter((item) => {
        return ids.includes(item.id)
});
    const content = (
        <div className="image-container">
          {filteredImages.length?
              filteredImages.map(image => 
                <img
                className="images"
                src={image.thumbnailUrl}
                alt={image.title}
                key={image.id}
            />
              ):
              (<p className="message"><b>No favourite image</b></p>)
          }
        </div>
    )
    return(
        <header>
    Image Gallery!
    <Popover content={content} placement="bottom" trigger="hover" >
        <Badge count={this.props.like.length}>
            <Icon className="icon" type="heart" theme="twoTone" twoToneColor="#ff0000" />
        </Badge>
    </Popover>
    </header>
    )
}
}

const mapStateToProps = ({ like, images }) => ({
    like,
    images,
});

export default connect(
    mapStateToProps,
    null
)(Header);
