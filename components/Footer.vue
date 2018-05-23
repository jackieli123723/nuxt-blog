<template>
<!--     <div id="footer" class="container-fluid">
      <div class="container">
        <div class="col-left v-a-c">
          <div class="v-a-b">
            <a href="https://github.com/jackieli123723/nuxt-blog" class="hire-us">
              喜欢? 加个星星!
            </a>
          </div>
        </div>
        <div class="col-right v-a-c">
          <div class="v-a-b">
           I'm a Front-end development engineer
          </div>
        </div>
      </div>
    </div> -->
    <footer class="mod-ft">
      <div class="grid">
        <div class="mod-ft-sec mod-ft-copyright">
          <p>
            Powered by
            <a href="http://issue.lilidong.cn" target="_blank">
              西门互联
            </a>
          </p>
          <br/>
          <p>
            Copyright © 2018. All Rights West Gate Reserved.
          </p>
        </div>
      </div>
    </footer>
</template>

<style scoped>
.grid {
    width: 1190px;
    margin: auto
}

.grid:after,.grid:before {
    content: " ";
    display: table
}
@media (min-width: 1600px) {
    .grid {
        width:1490px
    }
}

@media (min-width: 990px) and (max-width:1189px) {
    .grid {
        width:990px
    }
}

@media (max-width: 989px) {
    .grid {
        width:100%
    }
}
.mod-ft {
    text-align: center;
    margin-top: 30px;
    background: #fff;
    padding: 20px 0;
}

@media (max-width: 989px) {
    .mod-ft {
        margin-top:0
    }
}

.mod-ft-links li {
    width: 32px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    background-color: #f1f1f1;
    border-radius: 50%;
    margin: 0 5px
}

.mod-ft-copyright {
    margin: 10px 0;
    font-size: 16px
}

.mod-ft-copyright p {
    margin-bottom: 5px
}
/*@import '../assets/css/style.css'*/
</style>