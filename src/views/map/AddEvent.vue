<template>
  <div class="infoForm">
    <div class="popHead">&nbsp;&nbsp;&nbsp;发布启示</div>
    <div id="gp1">
      <span class="tex">要发布的是:</span>
      <select class="slct" id="slct1">
        <option>寻物启事</option>
        <option>失物招领</option>
      </select>
    </div>
    <div id="gp2">
      <span class="tex">物品类别是:</span>
      <select class="slct" id="slct2">
        <option>卡片证件</option>
        <option>书籍文具</option>
        <option>衣服鞋子</option>
        <option>电子设备</option>
        <option>各类钥匙</option>
        <option>其他分类</option>
      </select>
    </div>

    <div id="gp3">
      <span class="tex">物品名称是:</span>
      <input class="slct">
    </div>

    <div id="gp4">
      <span class="tex">丢(捡)地点是:</span>
      <input class="slct">
    </div>

    <div id="gp5">
      <div id="loncon">
        <span id="lonfix">经度:</span>
        <span id="lonnum">115.3300</span>
      </div>
      <div id="latcon">
        <span id="latfix">纬度:</span>
        <span id="latnum">115.3300</span>
      </div>
    </div>

    <div id="gp6">
      <span class="tex">备 注 信 息 :</span>
      <input class="slct">
    </div>

    <div id="gp7">
      <span class="tex">请上传图片:</span>
      <div id="imgcontainer">
        <svg t="1663680430370" class="icon-sample" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6672" width="80" height="80"><path d="M477.7 477.7V188.1c0-18.9 15.4-34.3 34.3-34.3s34.3 15.4 34.3 34.3v289.6H836c18.9 0 34.3 15.4 34.3 34.3s-15.4 34.3-34.3 34.3H546.3v289.6c0 18.9-15.4 34.3-34.3 34.3s-34.3-15.4-34.3-34.3V546.3H188.1c-18.9 0-34.3-15.4-34.3-34.3s15.4-34.3 34.3-34.3h289.6z" p-id="6673"></path></svg>      </div>
    </div>

    <button id="btn1">取 消</button>
    <button id="btn2">确 定</button>

  </div>
</template>

<script>
// import {useStore} '../../store/addEvent'

// let vars=



// import {useStore} from "vuex";

export default {
  name: "AddEvent",
  methods:{

    }
}
</script>

<style scoped>
.infoForm{
  position: absolute;
  left: 30%;
  top: 15%;
  width: 350px;
  height: 540px;
  /*background-color: red;*/
  border-radius: 10px ;
  z-index: 100;

  backdrop-filter: blur(16px) saturate(110%);
}

.tex{
  position: absolute;
  float: right;
  margin-right: 130px;
}

#gp1{
  top: 60px;
  left: 55px;
  position: absolute;
  width: 250px;
}

#gp2{
  top: 110px;
  left: 55px;
  position: absolute;
  width: 250px;
}

#gp3{
   top: 160px;
   left: 55px;
   position: absolute;
   width: 250px;
}

#gp4{
  top: 210px;
  left: 55px;
  position: absolute;
  width: 250px;
}

#gp5{
  top: 260px;
  left: 55px;
  position: absolute;
  width: 250px;
  height: 25px;
}

#gp6{
  top: 310px;
  left: 55px;
  position: absolute;
  width: 250px;
  height: 25px;
}

#gp7{
  top: 360px;
  left: 55px;
  position: absolute;
  width: 250px;
  height: 25px;
}

#btn1{
  position: absolute;
  top: 480px;
  left: 55px;
}

#btn1{
  position: absolute;
  width: 80px;
  top: 485px;
  left: 60px;
  border-radius: 5px;
}

#btn2{
  position: absolute;
  width: 80px;
  top: 485px;
  left: 215px;
  border-radius: 5px;
}

.slct{
  /*margin-left: 25px;*/
  float: right;
  margin-right: 10px;
  width: 140px;
  height: 25px;
}

#imgcontainer{
  float: right;
  width: 140px;
  height: 90px;
  /*background-color: red;*/
  margin-right: 10px;
  border-radius: 5px;
  border: black dashed  2px;
}

.icon-sample{
  /*margin-top: 5px;*/
  margin-bottom: 8px;
  margin-left: 29px;
  margin-right: 30px;
}

#loncon{
  float: right;
  position: absolute;
}


#latcon{
  float: right;
  position: relative;
  margin-right: 10px;
}

.popHead{
  width: 350px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(85, 178, 241, 0.3);
  font-weight: bold;
  /*background-color: blue;*/
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}


</style>