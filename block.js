const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
  backgroundColor: "#900",
  color: "#fff",
  padding: "20px",
};

registerBlockType("gutenberg-examples/example-01", {
  title: __("モンスタープロフ"), // ブロック名
  icon: "admin-users", // アイコン
  category: "monstown-blocks", // ブロックのカテゴリー
  edit() {
    return <div style={blockStyle}>編集画面で表示される文字</div>;
  },
  save() {
    return <div style={blockStyle}>公開画面で表示される文字</div>;
  },
});
