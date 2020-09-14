import React, { useEffect, useState } from 'react';
import { getTags } from '../../service';

function Tag(props) {
  const { pid } = props;
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags(pid).then((res) => {
      setTags(res.data);
    });
  }, []);

  return (
    <div className="titleWrapper">
      {tags.map((tag) => (
        <div
          key={tag.tag_id}
          className="tagStyle"
          title="yusa"
          color="cyan"
          // onClose={(e) => {
          //   e.preventDefault();
          //   this.handleDelTag();
          // }}
        >
          #{tag.tag}
        </div>
      ))}
      <div className="site-tag-plus">+ 新标签</div>
      {/* <AddTag
            visible={this.state.addTagModal}
            hideAddTagModal={this.hideAddTagModal}
            tags={tags}
            pid={picture_id}
          /> */}
    </div>
  );
}

export default Tag;
