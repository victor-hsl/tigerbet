import Content from '../../template/content'
import LiveRow from '../../components/liverow'
import { livegames } from '../../data/livegames'
const Live = () => {
    return(
        <Content>
            <div className="d-flex justify-content-center align-items-center my-2">
                <h2 className="display-5">Ao vivo</h2>
            </div>
            {livegames.length > 0 && livegames.map((item, chave)=>(
                <LiveRow content={item}/>
            ))}
        </Content>
    )
}

export default Live;