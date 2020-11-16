<template>
    <div class="kapsayici">      
  <section class="sub-categories">
    <div class="categories-path">
        <div class="container">
            <ul style="padding:30px;">
                <li>
                    <div> 
                        <a href="/">ANASAYFA    </a>
                        <img style="width:10px" src="https://www.flaticon.com/svg/static/icons/svg/758/758778.svg"/>                     
                    </div>
                </li>
                 <li><h1><span style="visibility:hidden;">xx</span>SİZİN İ&#199;İN SE&#199;TİĞİMİZ KİTAPLAR!..</h1></li>
            </ul>
        </div>
    </div>
    </section>
<section class="filter">
    <div class="sc-filter">
        <div class="container" >       
            <div class="row" >
                <div class="filter"> <!-- .filter-media-->
                <div class="fltr" >
                    <select name="" id="media" class="flt custom select-box-filter"  >
                        <option  value=""  >MEDYA CİNSİ  <pre>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#11206; </pre>   </option>
                            <option id="media_1134" value="İnce Kapak">İnce Kapak </option>
                            <option id="media_609" value="Ciltli">Ciltli   </option>
                            <option id="media_610" value="Cep Boy">Cep Boy </option>
                            <option id="media_789" value="3 Aylık">3 Aylık </option>                           
                   </select>
                   <!--
                       <pre>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#9205; </pre>
                     <a href=""> <img src="https://cdn4.iconfinder.com/data/icons/mayssam/512/right-512.png" height="10" width="10">   </a>
                     -->
                </div>                 
                </div>
                <div class="filter" id="priceFilter"> <!--.filter-price-->
                <div class="fltr">
                    <select name="" id="price" class="flt custom select-box-filter priceControl">
        <option value="">FİYAT  <pre>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#11206; </pre> </option>
            <option value="0,25">0 TL - 25 TL</option>
            <option value="25,50">25 TL - 50 TL</option>
            <option value="50,100">50 TL - 100 TL</option>
            <option value="100,250">100 TL - 250 TL</option>
            <option value="250,500">250 TL - 500 TL</option>
            <option value="500,-1">500 TL ve &#252;zeri</option>
    </select>
                </div>
    
</div>           
                <div class="filter-order-by" >
                    <div class="fltr" >
                    <select name="" id="order-by" class="custom select-box-filter flt" autocomplete="off" >             
                            <option value="groups.group.displayorder,asc" selected="selected" >Seçiniz  <pre>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#11206; </pre> </option>
                            <option value="price,desc">Azalan Fiyat</option>
                            <option value="price,asc">Artan Fiyat</option>
                            <option value="soldcount,desc">Çok Satan</option>
                            <option value="newness,desc">Yeni</option>
                            <option value="newness,asc">Eski</option>
                            <option value="name.sortable,asc">A - Z</option>
                            <option value="name.sortable,desc">Z - A</option>
                            <option value="discount,desc">Azalan İndirim</option>
                            <option value="discount,asc">Artan İndirim</option>             
                    </select>
                    <!--
                    <img style="width:5px" src="https://www.flaticon.com/svg/static/icons/svg/758/758778.svg"/>
                    -->
                    </div>                   
                </div>
            <div class="row">
                        <div style="visibility:hidden;">
                            <div>
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            </div>
                         </div>
                <div class="filter-results-count"  style="float:right;">
                    
                         <span id="searchResultCount">5038 ADET</span>
                </div>
            </div>                
<div class="container">
    <ul class="pager"><li><a class="active" href="javascript:;">1</a></li><li href="#"><a href="javascript:;">2</a></li><li href="#"><a href="javascript:;">3</a></li><li href="#"><a href="javascript:;">4</a></li><li><a href="javascript:;">...</a></li><li href="#"><a href="javascript:;">119</a></li><li href="#"><a href="javascript:;"></a><a class="next" href="javascript:;"> </a>
    </li>   <a href=""> <img src="https://cdn4.iconfinder.com/data/icons/mayssam/512/right-512.png" height="10" width="10">   </a> </ul>

</div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>


<script>
  export default {
    name: 'RankingBar'
  }
  
</script>

<style scoped lang="scss">
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";
.fltr{
    width: 150px;
    border: 1px lightgrey solid;
    padding: 10px;
}
select{
    overflow: auto;
}
</style>