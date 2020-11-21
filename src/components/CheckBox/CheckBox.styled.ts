import styled from 'styled-components';

export const Checkbox = styled.label`
  color: #8a8a8a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8em;

	align-items: center;
	cursor: pointer;
	display: flex;
  position: relative;

  & input[type="checkbox"] {
    height: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    & + span {
      align-items: center;
      background-color: #fff;
      border: 1px solid #a8a8a8;
      border-radius: 2px;
      display: flex;
      flex-shrink: 0;
      height: 13px;
      justify-content: center;
      margin-right: 5px;
      width: 13px;

      &::before {
        color: transparent;
        font-size: 0.75rem;

        content: "✓";
      }
    }

    &:checked + span::before {
      color: #d43131;
      font-weight: bolder;
    }
  }

  &:hover   input:not(:checked) + span {
    border-color: #d43131;
  }
`;
