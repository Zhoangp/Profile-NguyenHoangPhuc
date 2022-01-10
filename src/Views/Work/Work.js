import React from 'react';
import { forwardRef } from 'react/cjs/react.production.min';
import avt from '../../images/IMG_3452.PNG';

const Work = (props) => {
    return (
        <div className='cover work'>
            <div className="work-block">
            <div className="work-cover">
               <div className="work-img">
                   <img src={avt}/>
               </div>
               <div className="work-mail">nguyenhoangphucc7@gmail.com</div>
               <div className="work-social"><i class="fab fa-linkedin"></i> <i class="fab fa-instagram"></i> <i class="fab fa-facebook-square"></i></div>
            </div>
            </div>
        </div>
    );
};

export default forwardRef(Work);