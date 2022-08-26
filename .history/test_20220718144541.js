$("#zoom-01").ezPlus({
  zoomType: "inner",
  cursor: "crosshair",
});
let test = [1, 2, 3, 4, 5, 6];
[...test].reduceRight((val) => console.log("test:", val));
