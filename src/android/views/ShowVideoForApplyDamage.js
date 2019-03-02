import React from 'react'
import { connect } from 'react-redux'
import { file_host } from '../../config/Host'
import VideoView from './VideoView'


const ShowViedeoForApplyDamage = props => {
    const { applyDamageUploadImageReducer: { data: { videoUrl } }, loginReducer: { data: { user: { uid } } } } = props
    return (
        <VideoView initParam={{ videoUrl: `${file_host}/file/${videoUrl}/video.mp4` }} />
    )
}

const mapStateToProps = (state) => ({
    applyDamageUploadImageReducer: state.applyDamageUploadImageReducer,
    loginReducer: state.loginReducer
})


export default connect(mapStateToProps)(ShowViedeoForApplyDamage)