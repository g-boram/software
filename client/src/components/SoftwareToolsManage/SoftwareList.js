import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import "bootstrap";


class SoftwareList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseSwtoolList: '',
            append_SwtoolList: '',
            append_SoftCard: '',
        }
    }

    componentDidMount() {
        this.callSwToolListApi()
    }

    callSwToolListApi = async () => {
        axios.post('/api/Swtool?type=list', {
        })
        .then( response => {
            try {
                this.setState({ responseSwtoolList: response });
                this.setState({ append_SwtoolList: this.SwToolListAppend() });
                this.setState({ append_SoftCard: this.SoftCard() });
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }
    //test
    SoftCard = () => {
        let result = []
        var SwToolList = this.state.responseSwtoolList.data
        
        
        for(let i=0; i<3; i++){
            var data = SwToolList.json[i]

            var date = data.reg_date
            var year = date.substr(0,4)
            var month = date.substr(4,2)
            var day = date.substr(6,2)
            var reg_date = year +'.'+month+'.'+day

            result.push(
                <div class="card" style={{width: "30rem",height:700, margin:3}}>
                    <img class="card-img-top" id="uploadimg2" 
                        src={data.swt_big_imgpath}
                        style={{height:400}}
                    />
                    <div class="card-body" style={{ margin:5,fontSize:22}}>{data.swt_toolname}
                    <p class='card-text'>{data.swt_function}</p>
                    <p class='card-text' style={{ height:120}}>{data.swt_comments}</p>
                    <p class='card-text' style={{ textAlign:"end"}}>{reg_date}</p>
                    </div>
                    
                </div>
            )
        }
        return result
    }


    SwToolListAppend = () => {
        let result = []
        var SwToolList = this.state.responseSwtoolList.data
        
        for(let i=0; i<SwToolList.json.length; i++){
            var data = SwToolList.json[i]

            var date = data.reg_date
            var year = date.substr(0,4)
            var month = date.substr(4,2)
            var day = date.substr(6,2)
            var reg_date = year +'.'+month+'.'+day

            result.push(
                <tr class="hidden_type">
                    <td>{data.swt_toolname}</td>
                    <td><Link to={'/Software/'+data.swt_code}>{data.swt_function}</Link></td>
                    <td>{reg_date}</td>
                    <td>
                        <Link to={'/SoftwareView/'+data.swt_code} 
                        className="bt_c1 bt_c2 w50_b">수정</Link>
                        <a href="#n" class="bt_c1 w50_b" id={data.swt_code}
                        onClick={(e) => this.deleteSwtool(e)}>삭제</a>
                    </td>
                </tr>
            )
        }
        return result
    }

    deleteSwtool = (e) => {
        var event_target = e.target
        this.sweetalertDelete('정말 삭제하시겠습니까?', function() {
            axios.post('/api/Swtool?type=delete', {
                is_SwtCd : event_target.getAttribute('id')
            })
            .then( response => {
                this.callSwToolListApi()
            }).catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
        }.bind(this))
    }

    sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
            Swal.fire(
                'Deleted!',
                '삭제되었습니다.',
                'success'
            )
            }else{
                return false;
            }
            callbackFunc()
        })
    }

    render () {
        
        return (
            <>
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">Management 목록</h2>
                        <div style={{height:800, display:"flex"}}>
                        {this.state.append_SoftCard}
                        </div>
                        <div class="li_top_sch af">
                            <h2 class="s_tit1">공지사항</h2>
                        <Link to={'/SoftwareView/register'} className="sch_bt2 wi_au">등록</Link>
                        </div>
                    </div>

                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 ad_tlist">
                            <tr>
                                <th>툴 이름</th>
                                <th>기능</th>
                                <th>등록일</th>
                                <th>기능</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 ad_tlist">
                            {this.state.append_SwtoolList}
                        </table>
                    </div>
                </article>
            <div style={{height:100}}/>
            <div className='ct1 af'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require("../img/main/info-bg2.jpg")} class="d-block w-100" alt="..." height={500}/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("../img/main/info-bg3.jpg")} class="d-block w-100" alt="..." height={500}/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("../img/main/info-bg1.jpg")} class="d-block w-100" alt="..." height={500}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            </section>
            </>
        );
    }
}

export default SoftwareList;