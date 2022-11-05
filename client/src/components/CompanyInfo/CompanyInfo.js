import React, {Component,useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  Card, CardImg, CardText, 
  CardTitle,CardImgOverlay,
} from 'reactstrap';
import "bootstrap";

class CompanyInfo extends Component{
  render () {
    return(
    <>
    <br/>
    <div className='ct1 af'>
    <div style={{margin:"40px 40px", display:'flex'}}>
    <div style={{width:800}}><p style={{fontSize:60,}}>BR <br/>Company</p>
    <p>최고의 맛을 위한 열정</p>
    <p style={{fontSize:15}}>BR 컴퍼니 전 임직원들은 <br/>'보다 좋은 품질, 보다 높은 영양, 보다 앞선 식품'으로 인류 식생활 향상에 이바지하기 위해 맡은바 업무에 최선을 다합니다. <br/>
    영업,생산,연구,관리 등 모든 부서에서 스스로에게 주어진 업무를 빈틈없이 처리하는 것은 물론<br/>
    밝고 명량한 직장 분위기를 만들기 위해 노력하고 있습니다.<br/>
    이러한 BR 컴퍼니틔 노력들이 바로 최고 품질, 최고의 맛으로 승화되는 것입니다.</p>

    </div>

    </div>
          <div style={{textAlign:"center", marginTop:0}}>
          
          <div class="accordion accordion-flush" id="accordionFlushExample" height="500">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Company Info 1
          </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <div style={{display:"flex"}}>
              <img src={require("../img/main/info-bg1.jpg")} alt="" height={300}/>
              <div style={{padding:10, fontSize:20}}>
              <strong>This is the first item's accordion body.</strong><br/><br/> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Company Info 2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div style={{display:"flex"}}>
              <img src={require("../img/main/info-bg2.jpg")} alt="" height={300}/>
              <div style={{padding:10, fontSize:20}}>
              <strong>This is the first item's accordion body.</strong><br/><br/> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Company Info 3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div style={{display:"flex"}}>
              <img src={require("../img/main/info-bg3.jpg")} alt="" height={300}/>
              <div style={{padding:10, fontSize:20}}>
              <strong>This is the first item's accordion body.</strong><br/><br/> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          </div>
        </div>
      </div><br/>
      <Card inverse style={{display:'flex', width:"100%"}}>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            height: "100%"
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardImgOverlay>
      </Card><br/>

   </div>



   <div style={{backgroundColor:"#a8c2d6", padding:15, borderRadius:20}}>
   <div style={{margin:"40px 40px",color:"#fff",textShadow:2 }}>
    <p style={{fontSize:40}}>찾아 오시는길<br/></p>
    <p style={{fontSize:25}}>주소: 서울특별시 xx동 123-123 BR Company<br/></p>
    <p style={{fontSize:15}}>( 지하철 1호선 xx역 1번 출구로 나오셔서 xx은행 건물 2층 입니다. ) </p>
   </div>

    <Map
      center={{ lat: 37.5818, lng: 126.9866 }}
      style={{ width: "100%", height: "450px", borderRadius:10}}
    >
      <MapMarker position={{ lat: 37.5818, lng: 126.9866 }}>
        <div style={{color:"#000", marginLeft:35, textAlign:"center"}}>BR Company!</div>
      </MapMarker>
    </Map>
    </div>
    </div>
    </>
    )
  }
}

export default CompanyInfo;