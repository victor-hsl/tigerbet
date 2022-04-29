import Content from '../../template/content'
import Table from '../../components/table'
import {laligatable} from '../../data/laligatable'
const LaLigaTable = () => {
    return(
        <Content>
            <div className="d-flex justify-content-center my-2">
                <h2 className="display-5">La Liga - Classificação</h2>
            </div>
            <Table content={laligatable}/>
        </Content>
    )
}

export default LaLigaTable;