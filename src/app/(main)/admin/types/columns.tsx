import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
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
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(user.userId.toString())
              }
            >
              Copy User ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
