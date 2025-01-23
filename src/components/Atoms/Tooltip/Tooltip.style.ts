/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

const StyledTooltip = styled.div<{
  $direction?: 'top' | 'bottom' | 'left' | 'right'
}>`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  span {
    visibility: hidden;
    width: 120px;
    background-color: ${({ theme }) => theme.colors.steelBlue};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    bottom: ${({ $direction }) =>
      !$direction || $direction === 'top'
        ? '125%'
        : $direction === 'left'
          ? '0'
          : $direction === 'bottom'
            ? '-125%'
            : '0'};
    left: ${({ $direction }) =>
      !$direction || $direction === 'top' || $direction === 'bottom'
        ? '50%'
        : $direction === 'left'
          ? '-180%'
          : '120%'};
    margin-left: ${({ $direction }) =>
      !$direction || $direction === 'top' || $direction === 'bottom'
        ? '-60px'
        : $direction === 'left'
          ? '-60px'
          : '0'};
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      top: ${({ $direction }) =>
        !$direction || $direction === 'top'
          ? '100%'
          : $direction === 'left'
            ? '50%'
            : $direction === 'bottom'
              ? '-25%'
              : '50%'};
      left: ${({ $direction }) =>
        !$direction || $direction === 'top' || $direction === 'bottom'
          ? '50%'
          : $direction === 'left'
            ? '100%'
            : '0'};
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${({ $direction, theme }) =>
        !$direction || $direction === 'top'
          ? `${theme.colors.steelBlue} transparent transparent transparent`
          : $direction === 'left'
            ? `transparent transparent transparent ${theme.colors.steelBlue}`
            : $direction === 'bottom'
              ? `transparent transparent ${theme.colors.steelBlue} transparent`
              : `transparent ${theme.colors.steelBlue} transparent transparent`};
      transform: ${({ $direction }) =>
        !$direction || $direction === 'top' || $direction === 'bottom'
          ? 'unset'
          : $direction === 'left'
            ? 'translate(50%, -50%)'
            : 'translate(-50%, -50%)'};
    }
  }
`

export default StyledTooltip
