<template>
  <ContentField>
  <div id="container">
    <div class="row">
      <div class="col-2">
        <ul role="menubar" class="el-menu--vertical" id="left-bar">
          <li class="el-menu-item-head">
            <div id="mask"></div>
            <div class="head-elem" id="lost">丢失</div>
            <div class="head-elem" id="find">找回</div>
          </li>
          <li class="el-menu-item-map" id="menu1">
            <i class="el-icon-map">
              <svg t="1663520375903" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="3835" width="20" height="20">
                <path
                    d="M928 160H96a32 32 0 0 0-32 32v672a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z m-32 672H128V224h768v608z"
                    p-id="3836"></path>
                <path
                    d="M230.592 448.096H544a32 32 0 1 0 0-64H230.592a32 32 0 0 0 0 64zM230.592 640.096H544a32 32 0 1 0 0-64H230.592a32 32 0 1 0 0 64zM768 704a32 32 0 0 0 32-32V350.016a32 32 0 1 0-64 0V672a32 32 0 0 0 32 32z"
                    p-id="3837"></path>
              </svg>
              <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
                <path
                    d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                    p-id="2370"></path>
              </svg>
            </i>
            卡片证件
          </li>
          <li class="el-menu-item-map" id="menu2">
            <i class="el-icon-map">
              <svg t="1663521022925" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="8291" width="20" height="20">
                <path
                    d="M64.279825 895.44035H0.3198V95.940037a95.940037 95.940037 0 0 1 95.940038-95.940037h671.580262v799.500312h-63.960025V63.960025H96.259838a31.980012 31.980012 0 0 0-31.980013 31.980012z"
                    p-id="8292"></path>
                <path
                    d="M192.199875 384.07995h383.76015v63.960025H192.199875zM320.119925 255.8401h127.60025v63.960025H320.119925zM927.740162 1023.3604a95.940037 95.940037 0 0 1-95.940037-95.940038V150.625859l95.940037-143.910056 95.940038 143.910056V927.420362a95.940037 95.940037 0 0 1-95.940038 95.940038zM895.76015 170.133666V927.420362a31.980012 31.980012 0 0 0 63.960025 0V170.133666l-31.980013-47.970018zM767.8401 1023.3604H128.23985a127.92005 127.92005 0 1 1 0-255.8401h639.60025zM128.23985 831.480325a63.960025 63.960025 0 0 0 0 127.92005h575.640225v-127.92005z"
                    p-id="8293"></path>
                <path d="M863.780137 768.1599h127.92005v63.960025h-127.92005z" p-id="8294"></path>
              </svg>
              <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
                <path
                    d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                    p-id="2370"></path>
              </svg>
            </i>
            书籍文具
          </li>

          <li class="el-menu-item-map" id="menu3">
            <i class="el-icon-map">
              <svg t="1663550792615" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2525" width="20" height="20">
                <path
                    d="M752.8 143.2c3.2 0 6.3 1.3 8.5 3.5L955.6 341c5.5 5.5 5.5 14.3 0 19.8L864 452.5l-96-96V895H448v1H256V357.5l-96 96-91.6-91.6c-5.5-5.5-5.5-14.3 0-19.8L263 147.5c2.3-2.3 5.3-3.5 8.5-3.5H351c33.4 26.9 92.6 64 164.6 64 72.1 0 131.4-37.2 164.8-64.2l72.3-0.6h0.1z m0-64h-0.6l-83.8 0.7c-7.6 0.1-15 2.8-20.7 7.8-19.6 17-71.3 56.3-132.1 56.3-60.6 0-112.3-39.1-132-56.2-5.8-5.1-13.3-7.8-21-7.8h-91c-20.2 0-39.5 8-53.7 22.3L23.1 296.8c-30.5 30.5-30.5 79.8 0 110.3L128 512c8.8 8.8 20.4 13.3 32 13.3s23.2-4.4 32-13.3v416c0 17.7 14.3 32 32 32h288v-1h288c17.7 0 32-14.3 32-32V511c8.8 8.8 20.4 13.3 32 13.3s23.2-4.4 32-13.3l104.8-104.8c30.5-30.5 30.5-79.8 0-110.3L806.5 101.5c-14.2-14.2-33.6-22.3-53.7-22.3z"
                    p-id="2526"></path>
              </svg>
              <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
                <path
                    d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                    p-id="2370"></path>
              </svg>
            </i>
            衣物鞋子
          </li>

          <li class="el-menu-item-map" id="menu4">
            <i class="el-icon-map">
              <svg t="1663550984596" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="3595" width="20" height="20">
                <path
                    d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
                    p-id="3596"></path>
                <path
                    d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
                    p-id="3597"></path>
              </svg>
              <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
                <path
                    d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                    p-id="2370"></path>
              </svg>
            </i>
            电子设备
          </li>

          <li class="el-menu-item-map" id="menu5">
            <i class="el-icon-map">
              <svg t="1663551311838" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="6607" width="20" height="20">
                <path
                    d="M998.263901 738.657777l-0.661055-0.690731a62.933205 62.933205 0 0 0-44.157621-18.092017H938.001519v-15.399704c0-34.676708-28.053883-62.799153-62.729568-62.883064l-15.752744-0.042979v-15.555246a62.959811 62.959811 0 0 0-18.401055-44.482008l-97.713267-97.71429c36.661918-129.796922 1.05605-269.962985-95.924532-366.94459C576.621657 46.009801 482.415254 6.979958 382.207171 6.979958c-100.235712 0-194.469745 39.029844-265.313091 109.901842C46.021058 187.754823 6.963585 281.931551 6.963585 382.182612c0 100.208083 39.014494 194.427789 109.930495 265.299788 70.815717 70.84437 165.022121 109.887516 265.22918 109.887516 34.674661 0 68.702594-4.706176 101.686757-13.990614l255.156798 255.211033a62.918879 62.918879 0 0 0 44.480984 18.429707c1.113355 0 2.255362-0.028653 3.395324-0.098237l161.950162-8.709341c32.084678-1.703801 57.699005-27.334501 59.432481-59.41611l8.720598-161.964488a62.868737 62.868737 0 0 0-18.682463-48.174089z m-52.837287 206.771907l-161.978815 8.692969-282.870943-282.913923c-37.886813 15.513291-78.142575 23.24947-118.453596 23.24947-79.890379 0-159.837039-30.477068-220.790151-91.457808-121.976832-121.976832-121.934876-319.701707 0.028653-441.649886 60.994044-60.981764 140.928425-91.472135 220.845409-91.472135 79.903681 0 159.823736 30.490371 220.804477 91.457808 91.725914 91.697262 114.410521 226.227989 68.236991 339.22942l125.401831 125.428437v78.284814l78.466962 0.196475v78.31142l78.32677-0.027629 0.675381 0.69073-8.692969 161.979838z"
                    p-id="6608"></path>
                <path
                    d="M289.862158 404.092577c30.519023 0 59.205308-11.877491 80.790886-33.464092 21.586601-21.557949 33.449766-50.25856 33.449766-80.777584 0.028653-30.519023-11.864188-59.206332-33.449766-80.76428-21.585578-21.585578-50.244234-33.464092-80.763257-33.464092-30.50572 0-59.205308 11.892841-80.79191 33.491721-44.53829 44.523964-44.566942 116.989247-0.027629 161.527538 21.586601 21.586601 50.272886 33.450789 80.79191 33.450789zM238.757325 238.746069c13.653947-13.66725 31.802246-21.204909 51.133485-21.204909 19.302586 0 37.450885 7.524355 51.119159 21.190582 13.638598 13.639621 21.16193 31.801223 21.16193 51.119159 0 19.316912-7.523332 37.465212-21.16193 51.118136-13.696926 13.66725-31.844202 21.205932-51.146788 21.205932-19.332262 0-37.480561-7.524355-51.146788-21.177279-28.152121-28.180773-28.152121-74.043219 0.040932-102.251621z"
                    p-id="6609"></path>
                <path
                    d="M577.945813 548.260783c85.936059-101.138266 81.370076-253.379318-14.089875-348.853596-36.619962-36.59131-82.737211-61.078978-133.37644-70.801391-11.300348-2.197034-22.373522 5.227038-24.530647 16.61232-2.184754 11.369932 5.227038 22.374545 16.612319 24.530647 42.381165 8.172107 81.00271 28.674006 111.648623 59.290242 84.115601 84.130951 84.115601 221.029604 0 305.147252-40.748995 40.761274-94.939089 63.220754-152.595115 63.220754-57.627373 0-111.817468-22.45948-152.566463-63.220754-30.644889-30.645913-51.145765-69.253132-59.275916-111.63532-2.184754-11.369932-13.20267-18.767398-24.531671-16.626646-11.384259 2.170428-18.839029 13.175041-16.654275 24.531671 9.750042 50.681185 34.211104 96.798433 70.801391 133.36109 48.680625 48.694951 113.410753 75.507567 182.225911 75.507567 61.811664 0 120.258704-21.655162 166.769924-61.319455l288.760059 288.746757a20.859032 20.859032 0 0 0 14.822561 6.156197c5.36723 0 10.735484-2.042515 14.808234-6.156197 8.186433-8.17313 8.186433-21.446408 0-29.631819L577.945813 548.260783z"
                    p-id="6610"></path>
              </svg>
            </i>
            <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
              <path
                  d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                  p-id="2370"></path>
            </svg>
            各类钥匙
          </li>

          <li class="el-menu-item-map" id="menu6">
            <i class="el-icon-map">
              <svg t="1663551378019" class="icon-le" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="7589" width="20" height="20">
                <path
                    d="M178.666 428.667c-46.021 0-83.333 37.313-83.333 83.333 0 46.02 37.313 83.333 83.333 83.333S262 558.02 262 512c0-46.021-37.313-83.333-83.334-83.333z m333.334 0c-46.021 0-83.334 37.313-83.334 83.333 0 46.02 37.313 83.333 83.334 83.333 46.02 0 83.333-37.313 83.333-83.333 0-46.021-37.313-83.333-83.333-83.333z m333.333 0C799.313 428.667 762 465.979 762 512c0 46.02 37.313 83.333 83.333 83.333S928.666 558.02 928.666 512c0-46.021-37.312-83.333-83.333-83.333z"
                    p-id="7590"></path>
              </svg>
            </i>
            其他分类
            <svg t="1663591911233" class="icon-right" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2369" width="16" height="16">
              <path
                  d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                  p-id="2370"></path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="col-8">
        <div id="map-container">
          <div id="map-bar">
            <!--        添加数据-->
            <div class="map-tools" id="tool1">
              <div class="anmt" id="an1">
                <svg t="1663553074080" class="tool-icon" id="icon-tl1" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="10047" width="25" height="40">
                  <path
                      d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z"
                      p-id="10048"></path>
                </svg>
              </div>
            </div>
            <!--        为了动画效果而设置的div-->

            <!--        路线缓冲区-->
            <div class="map-tools" id="tool2">
              <div class="anmt" id="an2">
                <svg t="1663553388473" class="tool-icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="11011" width="25" height="40">
                  <path
                      d="M946.688 269.312l-88.576-151.04c-5.632-9.728-16.384-15.872-27.648-15.872h-0.512c-11.264 0-22.016 6.656-27.648 16.384l-83.968 151.04c-8.704 15.36-3.072 34.816 12.288 43.52 5.12 2.56 10.24 4.096 15.36 4.096 11.264 0 22.016-6.144 28.16-16.384l25.6-46.08v509.952c0 17.92-14.336 32.768-32.256 33.792-13.824-39.936-51.712-69.12-96.256-69.12-44.544 0-82.432 28.672-96.256 69.12-17.408-1.536-31.232-16.384-31.232-33.792v-506.88c0-53.248-42.496-96.768-95.744-97.792-13.312-40.448-51.712-70.144-96.768-70.144-45.056 0-83.456 29.184-96.768 70.144-54.272 0-98.304 44.032-98.304 98.304v314.368c-40.448 13.312-70.144 51.712-70.144 96.768s29.184 83.456 70.144 96.768v126.464c0 17.92 14.336 31.744 32.256 31.744s32.256-14.336 32.256-31.744v-126.464c40.448-13.312 70.144-51.712 70.144-96.768s-29.184-83.456-70.144-96.768V257.536c0-18.944 15.36-34.304 34.304-34.304 13.312 40.448 51.712 70.144 96.768 70.144 45.056 0 82.944-29.184 96.768-69.632 17.92 1.024 31.744 15.872 31.744 33.792v506.88c0 52.736 41.984 95.744 94.208 97.792 13.312 40.96 51.712 71.168 97.28 71.168s83.968-29.696 97.28-71.168c52.736-1.536 95.232-44.544 95.232-97.792V254.976l27.648 46.592c8.704 15.36 28.672 20.48 44.032 11.264 14.336-8.704 19.456-28.16 10.752-43.52zM188.416 706.56c-20.992 0-37.888-16.896-37.888-37.888 0-20.992 16.896-37.888 37.888-37.888s37.888 16.896 37.888 37.888c0 20.992-16.896 37.888-37.888 37.888z m163.328-477.184c-20.992 0-37.888-16.896-37.888-37.888s16.896-37.888 37.888-37.888 37.888 16.896 37.888 37.888-17.408 37.888-37.888 37.888z m319.488 640.512c-20.992 0-37.888-16.896-37.888-37.888 0-20.992 16.896-37.888 37.888-37.888 20.992 0 37.888 16.896 37.888 37.888 0 20.48-16.896 37.888-37.888 37.888z"
                      fill="#2c2c2c" p-id="11012"></path>
                </svg>
              </div>
            </div>
            <!--        圆形叠置分析-->
            <div class="map-tools" id="tool3">
              <div class="anmt" id="an3">
                <svg t="1663554276752" class="tool-icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="12126" width="25" height="40">
                  <path
                      d="M512 1024c-69.1 0-136.2-13.5-199.3-40.3C251.7 958 197 921 150 874c-47-47-84-101.7-109.7-162.7C13.5 648.2 0 581.1 0 512s13.5-136.2 40.3-199.3C66 251.7 103 197 150 150c47-47 101.7-84 162.7-109.7C375.8 13.5 442.9 0 512 0s136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.2 40.3 130.2 40.3 199.3s-13.5 136.2-40.3 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z m0-934c-57 0-112.3 11.2-164.2 33.1-50.2 21.3-95.4 51.7-134.2 90.5-38.8 38.8-69.2 83.9-90.5 134.2C101.2 399.7 90 455 90 512c0 57 11.2 112.2 33.1 164.2 21.3 50.2 51.7 95.4 90.5 134.2 38.8 38.8 83.9 69.2 134.2 90.5 52 22 107.3 33.1 164.2 33.1 57 0 112.2-11.2 164.2-33.1 50.2-21.3 95.4-51.7 134.2-90.5 38.8-38.8 69.2-83.9 90.5-134.2 22-52 33.1-107.3 33.1-164.2 0-57-11.2-112.3-33.1-164.2-21.3-50.2-51.7-95.4-90.5-134.2-38.8-38.8-83.9-69.2-134.2-90.5C624.2 101.2 569 90 512 90z"
                      p-id="12127"></path>
                </svg>
              </div>
            </div>
            <!--        拉框叠置分析-->
            <div class="map-tools" id="tool4">
              <div class="anmt" id="an4">
                <svg t="1663554748984" class="tool-icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="16578" width="25" height="40">
                  <path
                      d="M960.031235 159.921913v703.656418c0 52.974134-42.979014 95.953148-95.953148 95.953148h-703.656418c-52.974134 0-95.953148-42.979014-95.953148-95.953148v-703.656418c0-52.974134 42.979014-95.953148 95.953148-95.953148h703.656418c52.974134 0 95.953148 42.979014 95.953148 95.953148z m-831.593949-159.921913C57.771791 0 0.499756 57.272035 0.499756 127.937531v767.625183c0 70.665495 57.272035 127.937531 127.93753 127.93753h767.625183c70.665495 0 127.937531-57.272035 127.937531-127.93753v-767.625183c0-70.665495-57.272035-127.937531-127.937531-127.937531h-767.625183z"
                      p-id="16579"></path>
                </svg>
              </div>
            </div>
            <!--        导航-->
            <div class="map-tools" id="tool5">
              <div class="anmt" id="an5">
                <svg t="1663555002318" class="tool-icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="17531" width="25" height="40">
                  <path
                      d="M906.000638 1023.99996a99.290887 99.290887 0 0 1-57.16748-18.052889L483.763632 746.186063l-55.161604 221.649355a40.11753 40.11753 0 0 1-39.114592 30.088147 40.11753 40.11753 0 0 1-39.114592-31.091086l-82.240937-352.031328a20.058765 20.058765 0 0 0-11.032321-14.041135L50.494306 504.477943l-5.014692-3.008815a100.293826 100.293826 0 0 1 18.052889-176.517133L886.944811 7.020568a100.293826 100.293826 0 0 1 136.399603 101.296764l-17.04995 821.406432v3.008815a99.290887 99.290887 0 0 1-58.170419 81.237998 100.293826 100.293826 0 0 1-42.123407 10.029383z m-11.03232-84.246814a20.058765 20.058765 0 0 0 31.091085-13.038197l17.049951-821.406432v-3.008815a20.058765 20.058765 0 0 0-27.079333-21.061703L92.617712 399.169426a20.058765 20.058765 0 0 0-6.017629 34.099901l203.596466 94.276196a99.290887 99.290887 0 0 1 55.161604 68.199801l45.132222 190.558269 29.085209-117.343776a40.11753 40.11753 0 0 1 62.182172-23.06758z"
                      fill="" p-id="17532"></path>
                  <path
                      d="M389.487436 997.923565a40.11753 40.11753 0 0 1-27.079333-69.202739l191.561207-176.517134a40.11753 40.11753 0 0 1 54.158666 59.173358L416.566769 986.891244a40.11753 40.11753 0 0 1-27.079333 11.032321zM462.701929 714.092039a40.11753 40.11753 0 0 1-31.091086-65.190987L917.032959 42.123407a40.11753 40.11753 0 1 1 62.182172 50.146913L493.793015 699.047965a40.11753 40.11753 0 0 1-31.091086 15.044074z"
                      fill="" p-id="17533"></path>
                </svg>
              </div>
            </div>
          </div>
          <div id="map"></div>
        </div>
      </div>
      <div class="col-2">
        <div id="right-bar">
          <div id="info">
            <div id="info-head">
              &nbsp;丢&nbsp;失&nbsp;信&nbsp;息
            </div>
            <div id="img-sec">
            </div>
            <div id="tex-sec">
              <p class="text-in" id="text-in">我们用心，欢迎您来！</p>
            </div>
            <div id="btn-botm">
              <button id="junpto" @click="fx(1)">详细内容</button>
            </div>
          </div>
          <div id="rolling"></div>
        </div>
      </div>
      <!--    右边的信息框-->

      <!--    <add-event>-->
      <!--    </add-event>-->
    </div>


  </div>
  <div id="location"></div>
  </ContentField>

</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "./AddEvent"
// import AddEvent from "@/views/map/AddEvent";
import {useStore} from "vuex";
import $ from "jquery";
import router from "@/router"

const mapboxgl = require('mapbox-gl');
import ContentField from '@/components/ContentField.vue';

export default {
  name: "MapIndexView",
  components: {
    ContentField,
  },
  mounted() {
    this.initmap();
  },
  setup() {
    const fx = (id) => {
      router.push({
        name: "record_content",
        params: {
          recordId: id,
        }
      })
    }

    return {
      fx,
    }
  },
  methods: {
    initmap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Vvenp6IiwiYSI6ImNsODN5ODM4ZzA1eXozeHIxdGliY3F2YWsifQ.t2knE0hwgpPP7X8Z4MeKBQ'; //这里请换成自己的token
      var map = new mapboxgl.Map({
        container: 'map', // container id 绑定的组件的id
        style: 'mapbox://styles/mapbox/streets-v11', //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [114.357902, 30.537348], // 初始坐标系，这个是南京建邺附近
        zoom: 14,     // starting zoom 地图初始的拉伸比例
        // pitch: 60,  //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: 17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, //抗锯齿，通过false关闭提升性能
      });

      // 去除logo
      let controls = map._controls;
      controls.forEach(control => {
        // 去除logo控件
        if ('_updateLogo' in control) {
          map.removeControl(control)
        }

        // 去除attribute控件
        if ('_attribHTML' in control) {
          map.removeControl(control)
        }
      })


      // map.on('click',(e)=>{
      //   // st.state.lat = e
      //   console.log(e)
      //   console.log(e.lngLat.lng)
      //   console.log(e.lngLat.lat)
      //   var lng = e.lngLat.lng
      //   var lat = e.lngLat.lat
      //
      //   lng = lng.toFixed(4)
      //   lat = lat.toFixed(4)
      //
      //
      //   let sptexlat=document.getElementById('latnum')
      //   sptexlat.innerHTML= lat
      //
      //   let sptexlon= document.getElementById('lonnum')
      //   sptexlon.innerHTML= lng
      //
      // })

      map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
      });


      // var lng
      // var lat
      let records = []
      // eslint-disable-next-line no-unused-vars
      var total_records
      const store = useStore()
      console.log(store.state.user.token)
      // eslint-disable-next-line no-unused-vars
      const refresh_record = () => {
        let tmp = [];
        // eslint-disable-next-line no-undef
        $.ajax({
          url: "http://127.0.0.1:3000/lostfound/getlist",
          type: "get",
          headers: {
            authorization: "Bearer " + store.state.user.token,
          },
          data: {
            type: -1,
            state: 0,
            pageSize: -1,
          },
          "success": function (resp) {
            tmp = JSON.parse(JSON.stringify(resp.data.records))
            for (let i = 0; i < tmp.length; i++) {
              tmp[i].images = JSON.parse(tmp[i].images);
            }
            records = tmp
            total_records = parseInt(resp.data.records_count)
            console.log(tmp)
          }
        })
        return tmp
      }


      refresh_record()


      // var ds ={}
      setTimeout(() => {
            // console.log(1)
            var geojsonmy = {
              "name": "NewFeatureType",
              "type": "FeatureCollection",
              "features": []
            };

            for (var i = 0; i < records.length; i++) {
              // console.log(records[i])
              var feature = {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [records[i].longitude, records[i].latitude],
                },
                "properties": {
                  "details": records[i].about
                }
              }
              geojsonmy.features.push(feature)
            }
            console.log(geojsonmy)


            map.addSource('laf', {
              'type': 'geojson',
              'data': geojsonmy,
            })

            map.addLayer({
              'id': 'tst',
              'type': 'circle',
              'source': 'laf',
              'paint': {

                'circle-color': 'red',
                'circle-radius': 6,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#ffffff'
              }
            })
          }
          , 2000)

      map.on('click', 'tst', (e) => {
        console.log(e.features[0])
        const cords = e.features[0].geometry.coordinates
        const about = e.features[0].properties.details
        map.flyTo({
          center: cords,
          zoom: 17
        })
        var texin = document.getElementById('text-in')
        texin.innerHTML = about
        console.log(about)

      })


      let choose = 0;
      let elem1 = document.getElementById('lost');
      let elem2 = document.getElementById('find');
      let sildemask = document.getElementById('mask')

      elem1.addEventListener('click', function () {

        if (choose == 0) {
          sildemask.style.transform = 'translate(133px)'
          sildemask.style.transition = '0.5s'
          choose = 1
        }
      })

      elem2.addEventListener('click', function () {
        if (choose == 1) {
          sildemask.style.transform = 'translate(0px)'
          sildemask.style.transition = '0.5s'
          choose = 0
        }
      })


      var con1 = 0
      let elemBar1 = document.getElementById('menu1')
      elemBar1.addEventListener('click', function () {
        let s2 = elemBar1.getElementsByTagName('svg')[1]
        if (con1 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con1 = 1
          console.log(records.length)

          for (let i = 0; i < records.length; i++) {
            if (parseInt(records[i].id) < 3) {
              console.log(records[i].id)
              var div_child = document.createElement("div")
              div_child.id = 'bar' + records[i].id.toString()
              div_child.style.width = '266px'
              div_child.style.height = '40px'
              div_child.style.float = 'left'
              div_child.className = 'phone'
              div_child.style.textAlign = 'center'
              div_child.style.lineHeight = '40px'
              div_child.innerHTML = records[i].category
              console.log(div_child)
              div_child.click()
              elemBar1.after(div_child)

              let lng = records[i].longitude
              let lat = records[i].latitude
              console.log(lng, lat)

              let tm = document.getElementById('bar' + records[i].id.toString())
              console.log(tm)

              tm.addEventListener('click', function () {
                map.flyTo({
                  center: [lng, lat],
                  zoom: 30
                })
              })

              tm.addEventListener('mousemove', function () {
                tm.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
                tm.style.transition = '0.3s'
              })


            }
          }
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con1 = 0
          let iterp = document.getElementsByClassName('phone')
          // console.log(iterp.length)
          var num = iterp.length
          for (var j = 0; j < num; j++) {
            // console.log(iterp[j])
            iterp[0].remove()
          }
        }


      })


      var con2 = 0
      let elemBar2 = document.getElementById('menu2')
      elemBar2.addEventListener('click', function () {
        let s2 = elemBar2.getElementsByTagName('svg')[1]
        if (con2 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con2 = 1
          for (var i = 0; i < records.length; i++) {
            if (records[i].id < 5 && records[i].id >= 3) {
              var div_child = document.createElement("div")
              div_child.style.width = '266px'
              div_child.style.height = '40px'
              div_child.style.float = 'left'
              div_child.className = 'book-tool'
              div_child.style.textAlign = 'center'
              div_child.style.lineHeight = '40px'
              div_child.innerHTML = records[i].category
              elemBar2.after(div_child)
            }
          }
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con2 = 0
          let iterp = document.getElementsByClassName('book-tool')
          var num = iterp.length
          for (var j = 0; j < num; j++) {
            // console.log(iterp[j])
            iterp[0].remove()
          }
        }
      })


      var con3 = 0
      let elemBar3 = document.getElementById('menu3')
      elemBar3.addEventListener('click', function () {
        let s2 = elemBar3.getElementsByTagName('svg')[1]
        if (con3 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con3 = 1
          for (var i = 0; i < records.length; i++) {
            if (records[i].id < 7 && records[i].id >= 5) {
              var div_child = document.createElement("div")
              div_child.style.width = '266px'
              div_child.style.height = '40px'
              div_child.style.float = 'left'
              div_child.className = 'book-tool'
              div_child.style.textAlign = 'center'
              div_child.style.lineHeight = '40px'
              div_child.innerHTML = records[i].category

              elemBar3.after(div_child)
            }
          }
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con3 = 0
          let iterp = document.getElementsByClassName('book-tool')
          var num = iterp.length
          for (var j = 0; j < num; j++) {
            // console.log(iterp[j])
            iterp[0].remove()
          }
        }
      })

      var con4 = 0
      let elemBar4 = document.getElementById('menu4')
      elemBar4.addEventListener('click', function () {
        let s2 = elemBar4.getElementsByTagName('svg')[1]
        if (con4 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con4 = 1
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con4 = 0
        }
      })

      var con5 = 0
      let elemBar5 = document.getElementById('menu5')
      elemBar5.addEventListener('click', function () {
        let s2 = elemBar5.getElementsByTagName('svg')[1]
        if (con5 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con5 = 1
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con5 = 0
        }
      })

      var con6 = 0
      let elemBar6 = document.getElementById('menu6')
      elemBar6.addEventListener('click', function () {
        let s2 = elemBar6.getElementsByTagName('svg')[1]
        if (con6 == 0) {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(180deg)'
          con6 = 1
        } else {
          s2.style.transition = '0.5s'
          s2.style.transform = 'rotate(0deg)'
          con6 = 0
        }
      })


      // 上方工具栏动画效果控制
      var toolcon1 = 0
      let elemTool1 = document.getElementById('tool1')
      let an1 = document.getElementById('an1')

      var toolcon2 = 0
      let elemTool2 = document.getElementById('tool2')
      let an2 = document.getElementById('an2')

      var toolcon3 = 0
      let elemTool3 = document.getElementById('tool3')
      let an3 = document.getElementById('an3')

      var toolcon4 = 0
      let elemTool4 = document.getElementById('tool4')
      let an4 = document.getElementById('an4')

      var toolcon5 = 0
      let elemTool5 = document.getElementById('tool5')
      let an5 = document.getElementById('an5')

      elemTool1.addEventListener('click', function () {
        if (toolcon1 == 0) {
          an1.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
          toolcon1 = 1
          if (toolcon2 != 0) {
            an2.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon2 = 0
          }
          if (toolcon3 != 0) {
            an3.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon3 = 0
          }
          if (toolcon4 != 0) {
            an4.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon4 = 0
          }
          if (toolcon5 != 0) {
            an5.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon5 = 0
          }
        } else {
          an1.style.backgroundColor = 'rgba(153, 162, 170, 0)'
          toolcon1 = 0
        }


      })


      elemTool2.addEventListener('click', function () {
        if (toolcon2 == 0) {
          an2.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
          toolcon2 = 1
          if (toolcon1 != 0) {
            an1.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon1 = 0
          }
          if (toolcon3 != 0) {
            an3.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon3 = 0
          }
          if (toolcon4 != 0) {
            an4.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon4 = 0
          }
          if (toolcon5 != 0) {
            an5.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon5 = 0
          }
        } else {
          an2.style.backgroundColor = 'rgba(153, 162, 170, 0)'
          toolcon2 = 0
        }
      })


      elemTool3.addEventListener('click', function () {
        if (toolcon3 == 0) {
          an3.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
          toolcon3 = 1
          if (toolcon1 != 0) {
            an1.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon1 = 0
          }
          if (toolcon2 != 0) {
            an2.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon2 = 0
          }
          if (toolcon4 != 0) {
            an4.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon4 = 0
          }
          if (toolcon5 != 0) {
            an5.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon5 = 0
          }
        } else {
          an3.style.backgroundColor = 'rgba(153, 162, 170, 0)'
          toolcon3 = 0
        }
      })


      elemTool4.addEventListener('click', function () {
        if (toolcon4 == 0) {
          an4.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
          toolcon4 = 1
          if (toolcon1 != 0) {
            an1.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon1 = 0
          }
          if (toolcon2 != 0) {
            an2.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon2 = 0
          }
          if (toolcon3 != 0) {
            an3.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon3 = 0
          }
          if (toolcon5 != 0) {
            an5.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon5 = 0
          }
        } else {
          an4.style.backgroundColor = 'rgba(153, 162, 170, 0)'
          toolcon4 = 0

        }
      })


      elemTool5.addEventListener('click', function () {
        if (toolcon5 == 0) {
          an5.style.backgroundColor = 'rgba(85, 178, 241, 0.8)'
          toolcon5 = 1
          if (toolcon1 != 0) {
            an1.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon1 = 0
          }
          if (toolcon2 != 0) {
            an2.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon2 = 0
          }
          if (toolcon3 != 0) {
            an3.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon3 = 0
          }
          if (toolcon4 != 0) {
            an4.style.backgroundColor = 'rgba(153, 162, 170, 0)'
            toolcon4 = 0
          }
        } else {
          an5.style.backgroundColor = 'rgba(153, 162, 170, 0)'
          toolcon5 = 0
        }
      })
    }
  }
}
</script>

<style scoped>
path {
  width: 25px;
  height: 25px;

}

/*#container{*/
/*  !*display: inline-block;*!*/
/*  width: 1500px;*/
/*  height: 700px;*/
/*  !*background-color: red;*!*/
/*}*/

.anmt {
  position: relative;
  z-index: 5;
  float: left;
  width: 35px;
  height: 40px;
}


.map-tools {
  z-index: 1;
  float: left;
  width: 35px;
  height: 40px;
}


/*留个印记*/
.map-tools:hover {
  transition: 0.2s;
  background-color: rgba(85, 178, 241, 0.8);
}

.tool-icon {
  z-index: 10;
  margin-left: 5px;
  margin-right: 5px;
}

#map-bar {
  float: left;
  width: 890px;
  background-color: rgba(153, 162, 170, 0.2);
  height: 40px
}

#map-container {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  /*width: 890px;*/
  height: 100%;
}

#map {
  /*position: absolute;*/
  float: left;
  width: 30vw;
  height: 100%;
}

#right-bar {
  float: left;
  /*position: absolute;*/
  /*background-color: red;*/
  margin-top: 5px;
  width: 330px;
  height: 100%;
}


#info {
  width: 330px;
  height: 448px;
  border-bottom: lightgray solid 2px;
  /*background-color: red;*/
}

#info-head {
  font-size: 18px;
  width: 330px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  /*font-family: 'fangsong';*/
  background-color: rgba(85, 178, 241, 0.8);
}

#img-sec {
  border-left: lightgray solid 2px;
  width: 328px;
  height: 200px;
  /*background-color: red;*/
}

#tex-sec {
  border-left: lightgray solid 2px;
  width: 328px;
  height: 160px;
}

#btn-botm {

  width: 328px;
  height: 48px;
  border-left: lightgray solid 2px;
  /*background-color: red;*/
}

#junpto {
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgba(85, 178, 241, 0.8);
  margin-top: 5px;
  float: right;
  outline: none;
  border: none;
  border-radius: 6px;
  width: 100px;
  height: 38px;
}

#junpto:hover {
  transform: translateY(-1px);
  transform: translateX(-1px);
  transition: 0.5s;
  box-shadow: 1px 1px 1px #99a2aa;
}


.text-in {
  text-indent: 2em;
  color: black;
}

#rolling {
  width: 328px;
  height: 250px;
  border-left: lightgray solid 2px;
  /*background-color: black;*/
}

.el-menu--vertical {
  margin-top: 5px;
  float: left;
  /*margin-right: 2px;*/
  border-right: lightgray solid 2px;
  /*width: 268px;*/
  height: 600px;
  padding-left: 0px;
  list-style-type: none;
  /*border-right: #cccccc 3px;*/
}

.icon-right {
  float: right;
  margin-top: 17px;
  margin-right: 20px;
}

.el-menu-item-head {
  font-weight: bold;
  height: 40px;
  text-align: left;
  line-height: 40px;

  /*color: white;*/
  /*background-color: gray;*/
}

#mask {
  margin-top: 0px;
  position: absolute;
  text-align: center;
  line-height: 40px;
  z-index: -1;
  width: 132px;
  height: 40px;
  background-color: rgba(85, 178, 241, 0.8);
  transition: background-color 0.5s;
}

#lost {
  /*border-right: white solid 1px;*/
  text-align: center;
  line-height: 40px;
  float: left;
  width: 132px;
  height: 40px;
  z-index: 15;
  /*background-color: #55b2f1;*/
  transition: background-color 0.5s;
  /*box-shadow: 2px 2px 2px  #99a2aa;*/
}

#find {
  /*border-right: white solid 1px;*/
  text-align: center;
  line-height: 40px;
  float: left;
  width: 132px;
  height: 40px;
  z-index: 15;

  /*background-color: rgba(200,200,200,0.8);*/
  /*background-color: aquamarine;*/
  transition: background-color 0.5s;
  /*box-shadow: 2px 2px 2px  #99a2aa;*/
}

.el-icon-map {
  --color: inherit;
  line-height: 40px;
  margin-right: 6px;
  /*margin-bottom: 10px;*/
}


.el-menu-item-map {
  /*position: relative;*/
  float: left;
  height: 50px;
  width: 266px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  /*background: black;*/
}

.el-menu-item-map:hover {
  background: rgba(64, 158, 255, 0.25);

}

/*.el-menu-item*/

</style>