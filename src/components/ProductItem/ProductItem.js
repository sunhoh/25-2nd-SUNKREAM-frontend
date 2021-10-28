import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProductItem({ id, history, thumbnail_url, name, brand, price }) {
  // const history = useHistory();
  const [toggle, setToggle] = useState(false);

  return (
    <Link to={`/product-detail/${id}`}>
      <Item>
        <ItemImgInner>
          <ItemImg>
            <img alt="itemImg" src={thumbnail_url} />
          </ItemImg>
        </ItemImgInner>
        <ItemInfo>
          <Brand>
            <p>{brand}</p>
          </Brand>
          <ItemName>
            <p>{name}</p>
          </ItemName>
          <Price>
            <div>{price === null ? '-' : price?.toLocaleString('ko-KR')}</div>
            <p>즉시 구매가</p>
          </Price>
        </ItemInfo>
      </Item>
    </Link>
  );
}
export default withRouter(ProductItem);

const Item = styled.div`
  margin: 20px 0;
  padding: 0 12px;
  background: white;
`;

const ItemImgInner = styled.div`
  position: relative;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f6eeed;
  overflow: hidden;

  &:hover {
    & i {
      opacity: 1;
    }
  }
`;

const ItemImg = styled.div`
  img {
    width: 100%;
  }
`;

const ItemInfo = styled.div`
  padding: 15px 0 0;
  color: black;
`;

const Brand = styled.div`
  p {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`;

const ItemName = styled.div`
  margin: 10px 0 0;
`;

const Price = styled.div`
  padding: 7px 0 0;

  div {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    color: rgba(34, 34, 34, 0.5);
    margin: 5px 0 0;
    font-size: 13px;
  }
`;
