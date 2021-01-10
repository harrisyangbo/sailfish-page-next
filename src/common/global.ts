interface Cache {
	[key: string]: any
}

const cache:Cache = {
  getNameByUrlHandler(): string {
    return '';
  }
};

export default {
  getItem(key: string) {
    return cache[key];
  },
  setItem(key: string, item: any) {
    cache[key] = item;
  }
};
