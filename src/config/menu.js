export const MENU_CONFIG = [
  {
    title: "用户管理",
    index: "/user",
    icon: "",
    items: [
      {
        title: "用户列表",
        index: "/user/list",
        icon: "",
      },
      {
        title: "查看用户",
        index: "/user/list",
        icon: "",
      },
      {
        title: "导入用户",
        index: "/user/import",
        icon: "",
      }
    ],
  },
  {
    title: "产品管理",
    index: "/product",
    icon: "",
    subMenu: [
      {
        title: "水产品",
        index: "/product/aquatic",
        icon: "",
        items: [
          {
            title: "添加水产品",
            index: "/product/aquatic/add",
            icon: "",
          },
          {
            title: "查看水产品",
            index: "/product/aquatic/list",
            icon: "",
          },
        ],
      },
      {
        title: "电子产品",
        index: "/product/electronic",
        icon: "",
        items: [
          {
            title: "添加电子产品",
            index: "/product/electronic/add",
            icon: "",
          },
          {
            title: "查看电子产品",
            index: "/product/electronic/list",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    title: "订单管理",
    index: "/order",
    icon: "",
    subMenu: [
      {
        title: "水产品",
        index: "/order/aquatic",
        icon: "",
        items: [
          {
            title: "查看列表",
            index: "/order/aquatic/list",
            icon: "",
          },
        ],
      },
      {
        title: "电子产品",
        index: "/order/electronic",
        icon: "",
        items: [
          {
            title: "查看列表",
            index: "/order/electronic/list",
            icon: "",
          },
        ],
      },
    ],
  }
];
