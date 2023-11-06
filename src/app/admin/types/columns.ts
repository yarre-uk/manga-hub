import { ColumnDef } from '@tanstack/react-table';

import { User } from '@/shared/models/user';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'userId',
    header: 'Id',
  },
  {
    accessorKey: 'login',
    header: 'Login',
  },
  {
    accessorKey: 'firstName',
    header: 'First name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone number',
  },
  {
    accessorKey: 'showConfidentialInformation',
    header: 'Show Confidential Information',
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth Date',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'registrationDate',
    header: 'Registration date',
  },
  {
    accessorKey: 'isAdmin',
    header: 'Is admin',
  },
];
