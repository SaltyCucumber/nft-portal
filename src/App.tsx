import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import PrivateRoute from '@common/PrivateRoute';
import SideMenu from '@common/SideMenu';

import { useAccounts } from '@contexts/AccountContext';

import Hat from '@header/Header';

import { Themeable } from '@helpers/interfaces';
import { styleSettings } from '@helpers/reusableStyles';
import { routes } from '@helpers/routes';

import Home from '@pages/Home/Home';
import CollectionEdit from '@pages/MyNfts/Collections/CollectionEdit';
import CollectionsView from '@pages/MyNfts/Collections/CollectionsView';
import NewNft from '@pages/MyNfts/Nfts/NewNft';
import NftEdit from '@pages/MyNfts/Nfts/NftEdit';
import NftsView from '@pages/MyNfts/Nfts/NftsView';

const SMainContainer = styled.main<Themeable>`
  padding-top: 20px;
  margin: 0 20px;
  color: ${({ activeTheme }) => activeTheme.defaultTextColor};

  @media ${styleSettings.mediaQueries.tablet} {
    width: 728px;
    margin: 0 auto;
  }

  @media ${styleSettings.mediaQueries.desktop} {
    width: 984px;
  }
`;

const SContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

const SContent = styled.section`
  width: 100%;
`;

const App = () => {
  const { theme } = useAccounts();

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      background-color: ${theme.bodyBackground};
    }
  `;

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SMainContainer activeTheme={theme}>
          <Hat />
          <SContainer>
            <SideMenu />
            <SContent>
              <Routes>
                <Route path={routes.homepage} element={<Home />} />
                <Route
                  path={routes.collections}
                  element={
                    <PrivateRoute>
                      <CollectionsView />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={routes.collectionEdit()}
                  element={
                    <PrivateRoute>
                      <CollectionEdit />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={routes.nfts()}
                  element={
                    <PrivateRoute>
                      <NftsView />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={routes.nftMint()}
                  element={
                    <PrivateRoute>
                      <NewNft />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={routes.nftEdit()}
                  element={
                    <PrivateRoute>
                      <NftEdit />
                    </PrivateRoute>
                  }
                />
                <Route path='*' element={<Navigate to={routes.homepage} replace />} />
              </Routes>
            </SContent>
          </SContainer>
        </SMainContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
