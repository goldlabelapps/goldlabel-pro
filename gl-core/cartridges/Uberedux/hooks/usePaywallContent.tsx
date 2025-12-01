// /Users/goldlabel/GitHub/core/gl-core/cartridges/Uberedux/hooks/usePaywallContent.tsx
'use client';

import { useMemo } from 'react';
import globalNav from '../../../../public/globalNav.json';

/**
 * usePaywallContent
 * Returns all nav items with paywall: true
 */
export function usePaywallContent() {
  return useMemo(() => {
    const out: any[] = [];

    function walk(list: any[]) {
      for (const item of list) {
        if (item?.paywall === true) {
          out.push(item);
        }
        if (item.children?.length) walk(item.children);
      }
    }

    walk(globalNav as any[]);

    if (!out.length) return null;

    return out.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, []);
}
