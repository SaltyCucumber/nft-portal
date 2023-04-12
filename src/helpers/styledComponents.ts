// Styled components are separated from reusableStyles to prevent circular dependencies
import Card from 'react-bootstrap/esm/Card';
import Modal from 'react-bootstrap/esm/Modal';
import styled from 'styled-components';

import { ThemeStyle } from './interfaces';

export const SCard = styled(Card)`
  background-color: ${({ activetheme }: { activetheme: ThemeStyle }) => activetheme.fill6};
`;

export const SCardEdit = styled(Card.Subtitle)`
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    padding-right: 6px;
    color: ${({ activetheme }: { activetheme: ThemeStyle }) => activetheme.textAndIconsPrimary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }

    svg {
      width: 15px;
      position: absolute;
      top: -2px;
      right: -12px;
    }
  }
`;

export const SModal = styled(Modal)`
  .modal-content {
    border-radius: 16px;
    background-color: ${({ activetheme }: { activetheme: ThemeStyle }) => activetheme.backgroundTertiary};
    border: 1px solid ${({ activetheme }: { activetheme: ThemeStyle }) => activetheme.appliedStroke};
  }

  .modal-header {
    padding: 24px 24px 32px;
  }

  modal-body {
    padding: 0 24px 24px;
  }
`;
