import { Button, Card } from 'antd'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom';
interface Props {
    children? : JSX.Element | JSX.Element[],
    title : string,
    LinkBtn : string
}
function PlantillaData({children, LinkBtn,title}: Props): ReactElement {
    const { push } = useHistory();

    return (
      <div className="container">
        <Card
          title={title}
          extra={
            <Button type="primary"
              onClick={() =>
                push(LinkBtn)
              }
              style={{display:"flex",gap:5, alignItems:"center"}}
            >
              <i className="fa fa-plus"></i> <span>Nuevo</span>
            </Button>
          }
        >
          {children}
        </Card>
    </div>
    )
}

export default PlantillaData
