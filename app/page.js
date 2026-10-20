import { defaultLocale } from '@/lib/dictionaries';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
