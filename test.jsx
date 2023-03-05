<ProSidebar collapsed={isCollapsed}>
<Menu iconShape="square">
  {/* LOGO AND MENU ICON */}
  <MenuItem
    onClick={() => setIsCollapsed(!isCollapsed)}
    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
    style={{
      margin: "10px 0 20px 0",
      color: colors.grey[100],
    }}
  >
    {!isCollapsed && (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
      >
        <Typography variant="h3" color={colors.grey[100]}>
          ADMINIS
        </Typography>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
    )}
  </MenuItem>

  {/* User */}
  {!isCollapsed && (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={`../../assets/user.jpg`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>

      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          Nishikigi Chisato
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Lycoris
        </Typography>
      </Box>
    </Box>
  )}

  {/* Menu Items */}
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Dashboard"
      to="/"
      icon={<HomeOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />

    <Typography
      variant="h6"
      color={colors.grey[300]}
      sx={{ m: "15px 0 5px 20px" }}
    >
      Data
    </Typography>
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Manage Team"
      to="/team"
      icon={<PeopleOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Contacts Information"
      to="/contacts"
      icon={<ContactsOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Invoices Balances"
      to="/invoices"
      icon={<ReceiptOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />

    <Typography
      variant="h6"
      color={colors.grey[300]}
      sx={{ m: "15px 0 5px 20px" }}
    >
      Pages
    </Typography>
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Profile Form"
      to="/form"
      icon={<PersonOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Calendar"
      to="/calendar"
      icon={<CalendarTodayOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="FAQ Page"
      to="/faq"
      icon={<HelpOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />

    <Typography
      variant="h6"
      color={colors.grey[300]}
      sx={{ m: "15px 0 5px 20px" }}
    >
      Charts
    </Typography>
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Bar Chart"
      to="/bar"
      icon={<BarChartOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Pie Chart"
      to="/pie"
      icon={<PieChartOutlineOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Line Chart"
      to="/line"
      icon={<TimelineOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
    <Item
      title="Geography Chart"
      to="/geography"
      icon={<MapOutlinedIcon />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
</Menu>
</ProSidebar>