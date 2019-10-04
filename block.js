const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, MediaUploadCheck } = wp.editor;
const { Button } = wp.components;

registerBlockType('monstown/monster-profile', {
  title: __('モンスタープロフ'), // ブロック名
  icon: 'admin-users', // アイコン
  category: 'monstown-blocks', // ブロックのカテゴリー
  attributes: {
    mediaId: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src',
    },
    textarea: {
      type: 'array',
      source: 'children',
      selector: '.textarea',
    },
  },
  edit: props => {
    const focusedEditable = props.focus ? props.focus.editable || 'mediaID' : null;
    const attributes = props.attributes;
    const onSelectImage = media => {
      props.setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
      });
    };
    const onChangeTextarea = value => {
      props.setAttributes({ textarea: value });
    };
    const onFocusTextarea = focus => {
      props.setFocus(_.extend({}, focus, { editable: 'textarea' }));
    };

    return (
      <div className="monstown-profile-row">
        <div className="monstown-profile-image">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              value={attributes.mediaID}
              render={({ open }) => (
                <Button className={attributes.mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                  {!attributes.mediaID ? __('画像選択') : <img src={attributes.mediaURL} />}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </div>
        <RichText
          tagName="p"
          className="monstown-profile-textarea"
          onChange={onChangeTextarea}
          value={attributes.textarea}
          focus={focusedEditable === 'textarea'}
          onFocus={onFocusTextarea}
        />
      </div>
    );
  },
  save: props => {
    const {
      className,
      attributes: { mediaURL, textarea },
    } = props;
    return (
      <div className="monstown-profile-row">
        {mediaURL && (
          <div className="monstown-profile-image">
            <img className={className} src={mediaURL} />
          </div>
        )}
        <div className="monstown-profile-textarea">{textarea}</div>
      </div>
    );
  },
});
