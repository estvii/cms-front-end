const drawerWidth = 240;

const SidebarStyles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

export default SidebarStyles;
