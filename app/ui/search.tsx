'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  // useSearchParams 用户获取和修改当前页面的URL参数
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  // 这里如果没有useDebouncedCallback来去抖包装search函数就会导致用户输入时，页面会频繁刷新
  // useDebouncedCallback 接收两个参数，第一个是用户输入的回调函数，第二个是去抖的时间，单位是毫秒，下面即用户停止输入300ms后出发搜索函数
  const handleSearch = useDebouncedCallback((term: string) => {
    // 这里URLSearchParams可以获取URL后面的请求字符串，比如 ?page=1&query=a
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // 这里设置page=1，因为搜索结果应该从第一页开始展示
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // 这里的pathname是当前页面路径，比如 /dashboard/invoices
    // replace(${pathname}?${params.toString()}) 将url更新为用户的搜索，比如 /dashboard/invoices?query=lee
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={ (e) => { 
          handleSearch(e.target.value) 
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
