import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@material-ui/core";
import { ExpandMore} from "@material-ui/icons";
import './listItem.css';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <Box className="box">
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typographytitle">ATM SETTINGS </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
        <ListItemText primary="ATM settings1" />
        <ListItemText primary="ATM settings2" />
        <ListItemText primary="ATM settings3" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Business Setup </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
        <ListItemText primary="Business Setup 1" />
        <ListItemText primary="Business Setup 2" />
        <ListItemText primary="Business Setup 3" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>User Management </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
        <ListItemText primary="user" />
        <ListItemText primary="profile" />
        <ListItemText primary="group" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>license Management</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
        <ListItemText primary="license Management1" />
        <ListItemText primary="license Management2" />
        <ListItemText primary="license Management3" />
        </AccordionDetails>
      </Accordion>
      </Box>
    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Business Setup" />
    </ListItem> */}
    {/* <ListItem button> */}
      {/* <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon> */}
      {/* <ListItemText primary="User Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="license Management" />
    </ListItem> */}
  </div>
);


