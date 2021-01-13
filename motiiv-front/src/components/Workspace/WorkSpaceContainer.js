import React, { useEffect } from 'react';
import styled from 'styled-components';
import PlusBtn from './PlusBtn';
import WorkSpaceBox from './WorkSpaceBox';
import { getWorkspaces } from '../../modules/mymotiiv';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../common/Loading/Loading';
const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem;
  min-height: 20rem;
  background-color: white;
  margin-top: 4rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.15);
  @media ${props => props.theme.maxdesktop} {
    min-height: 17.5rem;
  }
`;

function WorkSpaceContainer() {
  const dispatch = useDispatch();
  const { workspaces, loading } = useSelector(({ mymotiiv, loading }) => ({
    workspaces: mymotiiv.workspaces,
    loading: loading['mymotiiv/GET_WORKSPACES'],
  }));
  useEffect(() => {
    dispatch(getWorkspaces());
  }, []);
  return (
    <CenterWrapper>
      {!loading &&
        workspaces &&
        workspaces.map((space, idx) => (
          <WorkSpaceBox
            space={space}
            key={'box-' + idx}
            idx={idx}
            hasToShift={workspaces.length > 3}
          ></WorkSpaceBox>
        ))}
      {!loading && workspaces.length < 6 && (
        <PlusBtn hasToShift={workspaces.length > 3}></PlusBtn>
      )}
      {loading && <Loading></Loading>}
    </CenterWrapper>
  );
}

export default React.memo(WorkSpaceContainer);
