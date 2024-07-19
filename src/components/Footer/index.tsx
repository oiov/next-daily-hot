/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-15 10:32:00
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-27 18:16:07
 * @Description: 底部版权信息
 */
import Image from 'next/image';

import GlobalSetting from '@/components/GlobalSetting';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* 顶部分割线 */}
      <div className="flex items-center align-center text-center w-full flex-row">
        <div className="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
        <div className="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap">
          <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 text-[10px] flex-shrink-0">
            <Image src="/logo.svg" alt="logo" width={20} height={20} />
          </span>
        </div>
        <div className="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
      </div>
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-32 py-3 max-sm:flex-col -mt-2.5">
        {/* 备案 */}
        <div className="flex items-center gap-3 max-sm:flex-col"></div>
        {/* 社交图标 */}
        <div className="max-sm:order-first flex items-center">
          {/* 全局设置 */}
          <GlobalSetting />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
