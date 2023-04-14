import {MenuItem} from 'primeng/api';

export const estadosFixed = (): any => {
  return [
    {
      key: true,
      label: 'Activo',
    },
    {
      key: false,
      label: 'Inactivo',
    }
  ];
};
