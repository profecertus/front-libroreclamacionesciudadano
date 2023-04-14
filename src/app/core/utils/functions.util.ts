export const generateTree = (data): any => {
  const reduce = data.reduce((h, o) => (h[o.seccionId] = Object.assign({}, o), h), Object.create(null));
  return data.reduce((t, node) => {
    const ob = reduce[node.seccionId];

    if (ob.parentSeccionId === ob.seccionId) {
      t.push(ob);
    } else {
      if (reduce[node.parentSeccionId] != null){
        reduce[node.parentSeccionId].children || (reduce[node.parentSeccionId].children = []);
        reduce[node.parentSeccionId].children.push(ob);
      }
    }
    return t;
  }, []);
};


export const isUrl = (str): boolean => {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}[\:?\d]*)\S*$/.test(str);
};

export const firstPageTable = (table: string):void => {
  let local: any = localStorage.getItem(table);
  if (local) {
    local = JSON.parse(local);
    local.first = 0;
    local.filters = null;
    localStorage.setItem(table, JSON.stringify(local));
  }
};
