import { defaultThemes } from 'react-data-table-component';

export const tableStyles = {
  table: {
    style: {},
  },
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderRightColor: defaultThemes.default.divider.default,
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderLeftColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderRightColor: defaultThemes.default.divider.default,

      '&:first-of-type': {
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: defaultThemes.default.divider.default,
      },
    },
  },
};
