let func = {
  n: [],
  in(data) {
    this.n = data;
    console.log(this.n);
    return this.n
  },
  out() {
    // console.log(this.n);
    // console.log(12313131);
    // return this.n!==[]?this.n:[1,2,3,4]
    console.log(this.in());;
  }
}
export default func;
