<template>
    <div class="posts-pagination">
        <ul>
            <li v-show="temCurrent != 1" @click="temCurrent-- && goto(temCurrent--)"><a class="prev page-numbers" href="javascript:;">Previous</a></li>
            <li v-for="index in pages" @click="goto(index)" :key="index">
              <span :class="{'current':temCurrent == index}"   class="page-numbers">{{index}}</span>
            </li>
            <li v-show="totalPage != temCurrent && totalPage != 0 " @click="temCurrent++ && goto(temCurrent++)"><a class="next page-numbers"  href="javascript:;">Next</a></li>
        </ul>
    </div>
</template>


<script>
  export default {
    data(){
      return{
            showItem:5,
            temCurrent:this.currentPage //用个临时变量存储 否则props报错使用同一个变量
            //默认数据
            // currentPage:1,
            // totalPage:2
      }
    },
    props:{
      // 一共有分多少页 9页/per
      totalPage:{
        type: Number,
        required: true
      },
      // 当前所在页数
      currentPage: {
       type: Number,
       default: 1
      }
    },
    watch: {
     currentPage(val) {
     this.temCurrent = val;//新增currentPage的watch，监听变更并同步到temCurrent上 否则出现初始化高亮页码大于1
     }
   },
    computed:{
          pages(){
              var pag = [];
              if( this.temCurrent < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                   //总页数和要显示的条数那个大就显示多少条
                   var i = Math.min(this.showItem,this.totalPage);
                   while(i){
                       pag.unshift(i--);
                   }
               }else{ //当前页数大于显示页数了
                   var middle = this.temCurrent - Math.floor(this.showItem / 2 ),//从哪里开始
                       i = this.showItem;
                   if( middle >  (this.totalPage - this.showItem)  ){
                       middle = (this.totalPage - this.showItem) + 1
                   }
                   while(i--){
                       pag.push( middle++ );
                   }
               }
               return pag
         }
    },
    methods:{
        goto (index){
          if(index == this.temCurrent) return;
            this.temCurrent = index;
            // console.log("当前页数",index);
             //这里派发数据可以发送ajax请求
            this.$emit('changePageButton', index);
        }
    }
  }
</script>

