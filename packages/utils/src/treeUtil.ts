interface ITree {
  title: string;
  value: string;
  children: ITree[];
}

export const mockTreeData: ITree[] = [
  {
    title: "Node1",
    value: "1",
    children: [
      {
        title: "Child Node1",
        value: "1-1",
        children: [
          {
            title: "child node1-0",
            value: "1-1-1",
            children: [],
          },
        ],
      },
      {
        title: "Child Node2",
        value: "1-2",
        children: [{
          title: "child node1-2-1",
          value: "1-2-1",
          children: [
            {
              title: "child node1-2-1-1",
              value: "1-2-1-1",
              children: [],
            }
          ],
        }],
      },
    ],
  },
  {
    title: "Node2",
    value: "2",
    children: [
      {
        title: "Child Node2-1",
        value: "2-1",
        children: [
          {
            title: "child node2-1-1",
            value: "2-1-1",
            children: [],
          },
        ],
      },
      {
        title: "Child Node2-2",
        value: "2-2",
        children: [
          {
            title: "child node2-2-1",
            value: "2-2-1",
            children: [],
          },
        ],
      },
    ],
  },
];

/**
 * 通过id找node
 * @param treeData
 * @param id
 * @returns
 */
export function getTreeNodeById(treeData: any, id: string | number) {
  let result = {};
  function loop(data: any) {
    for (const item of data) {
      if (item.value === id) {
        result = item;
        break;
      }

      if (item.children) {
        loop(item.children);
      }
    }
  }
  loop(treeData);
  return result;
}

/**
 * 将树形json格式转换为前端想要的数据
 */
export function getTreeData(treeData: ITree[]) {
  const result = treeData.map((ele: ITree) => {
    const item: any = {
      name: ele.title,
      key: ele.value,
    };
    if (ele.children) {
      item.children = getTreeData(ele.children);
    }
    return item;
  });
  return result;
}

/**
 * 查找含有targetValue之前的所有父节点
 * @param list 树结构
 * @param targetValue 目标项value
 * @returns 
 */
export function getTreeInfoById(list: ITree[], targetValue: string) {
  let result: ITree[] = [];
  let curItem: ITree;
  function loop(list: ITree[], targetValue: string, parent?: ITree) {
    if (curItem) return;
    for (const item of list) {
      if (curItem) break;
      result.push(item);
      
      if (item.value === targetValue) {
        curItem = item;
        break;
      }
      if (item?.children?.length > 0) {
        loop(item.children, targetValue, item);
      }
      if (!curItem) {
        result = parent ? [parent] : [];
      }
    }
  }
  loop(list, targetValue);
  return result;
}
