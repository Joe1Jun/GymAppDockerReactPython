import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Divider,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
  Tabs,
  Tab,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import TableViewIcon from '@mui/icons-material/TableView';
import InfoIcon from '@mui/icons-material/Info';

const HelpPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ 
        fontWeight: 'bold', 
        color: theme.palette.primary.main,
        textAlign: 'center',
        my: 4
      }}>
        Idea Management App Help Center
      </Typography>
      
      <Paper elevation={3} sx={{ mb: 4, p: 2, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text.secondary }}>
          Welcome to the help center for the Idea Management App. Here you'll find information about how to use the search functionality with Azure AI Search and navigate the data grid effectively.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<SearchIcon />} label="Search Types" />
          <Tab icon={<TuneIcon />} label="Search Parameters" />
          <Tab icon={<TableViewIcon />} label="Data Grid Usage" />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: theme.palette.primary.main }}>
            Search Types
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[
              {
                title: 'Full Text Search',
                description: 'Performs traditional keyword-based search across your idea database. Matches exact words and phrases in your content.',
                chips: ['Best for: Keyword matching', 'Exact text']
              },
              {
                title: 'Vector Search',
                description: 'Uses AI embeddings to find semantically similar content, going beyond keyword matching to understand the meaning behind your search.',
                chips: ['Best for: Semantic matching', 'Similar concepts']
              },
              {
                title: 'Hybrid Search',
                description: 'Combines both full text and vector search capabilities for the most comprehensive results, balancing keyword precision with semantic understanding.',
                chips: ['Best for: Comprehensive results', 'Balanced approach']
              }
            ].map(({ title, description, chips }) => (
              <Grid item xs={12} md={4} key={title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>{title}</Typography>
                    <Typography variant="body1" color="text.secondary">{description}</Typography>
                    <Box sx={{ mt: 2 }}>
                      {chips.map((chip, i) => (
                        <Chip 
                          key={i} 
                          label={chip} 
                          size="small" 
                          color={i === 0 ? 'primary' : undefined} 
                          variant={i === 0 ? 'filled' : 'outlined'} 
                          sx={{ mr: 1 }} 
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Paper sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: theme.palette.background.default }}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>
              How to Select a Search Type
            </Typography>
            <Typography variant="body1">
              1. Locate the search type selector in the top section of the search panel.
            </Typography>
            <Typography variant="body1">
              2. Choose the appropriate search type based on your needs:
            </Typography>
            <Box sx={{ pl: 4 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Use <b>Full Text</b> when looking for specific keywords or phrases
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                • Use <b>Vector</b> when looking for ideas related to a concept, even if they don't contain exact keywords
              </Typography>
              <Typography variant="body2">
                • Use <b>Hybrid</b> when you want a balance of both approaches (recommended for most searches)
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}

      {tabValue === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: theme.palette.primary.main }}>
            Search Parameters
          </Typography>
          
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Search Fields</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                Fields are derived directly from your Azure Search index schema. Select which fields to search in:
              </Typography>
              <Grid container spacing={2}>
                {['Title', 'Description', 'Tags', 'All Fields'].map((field) => (
                  <Grid item xs={12} sm={6} key={field}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold">{field}</Typography>
                        <Typography variant="body2">
                          {field === 'All Fields'
                            ? 'Search across all indexed fields for broad results.'
                            : `Search only within the "${field.toLowerCase()}" field.`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Advanced Parameters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Top Results</Typography>
                  <Typography variant="body2">
                    Enables re-ranking so the most relevant matches appear first based on a combination of scoring profiles and match strength.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Nearest Neighbors</Typography>
                  <Typography variant="body2">
                    Vector-based ranking to return the closest matching ideas based on semantic similarity.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Relevance Score Threshold</Typography>
                  <Typography variant="body2">
                    Filter out results with low relevance scores (0–100). Higher thresholds increase result quality.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Results Limit</Typography>
                  <Typography variant="body2">
                    Limit the number of returned results to focus on top matches or reduce clutter.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Date Range Filter</Typography>
                  <Typography variant="body2">
                    Restrict search results to ideas created or modified within a specified time window.
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
          
          <Paper sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: theme.palette.background.default }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <InfoIcon color="info" sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ color: theme.palette.info.main }}>
                Pro Tips
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              For most effective searches, consider these recommendations:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Combine search types with field selection for more precise results
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Start with broader parameters and narrow down if too many results appear
            </Typography>
            <Typography variant="body2">
              • For complex queries, use Hybrid search with All Fields selected
            </Typography>
          </Paper>
        </Box>
      )}

      {tabValue === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: theme.palette.primary.main }}>
            Data Grid Usage
          </Typography>
          
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Understanding the Data Grid
              </Typography>
              <Typography variant="body1" paragraph>
                The MUI Data Grid displays your search results in a powerful, interactive table format. Here's how to make the most of it:
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Basic Features',
                    points: [
                      'Sorting: Click any column header to sort results',
                      'Filtering: Use the filter button on columns to filter results',
                      'Pagination: Navigate between pages using controls at the bottom'
                    ]
                  },
                  {
                    title: 'Advanced Features',
                    points: [
                      'Column Reordering: Drag column headers to reorder them',
                      'Column Resizing: Drag the edge of a column header to resize',
                      'Density Setting: Adjust row height using the density selector'
                    ]
                  }
                ].map(({ title, points }) => (
                  <Grid item xs={12} md={6} key={title}>
                    <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {points.map((pt) => (
                        <Typography component="li" variant="body2" sx={{ mb: 1 }} key={pt}>{pt}</Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Working with Selected Rows</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                You can select one or multiple rows in the data grid:
              </Typography>
              {[
                'Click on a row to select it (selected rows are highlighted)',
                'Hold Ctrl/Cmd while clicking to select multiple rows',
                'Use the checkbox column (if enabled) for multiple selection',
                'Selected ideas can be exported, shared, or grouped using the action buttons above the grid'
              ].map((tip) => (
                <Typography variant="body2" sx={{ mb: 1 }} key={tip}>• {tip}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Customizing the Data Grid</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                Personalize your view with these options:
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    label: 'Column Visibility',
                    text: 'Click the columns button to show/hide specific columns. Configure exactly what information you want to see.'
                  },
                  {
                    label: 'Row Density',
                    text: 'Adjust between comfortable, standard, and compact row heights to fit more data on screen.'
                  }
                ].map(({ label, text }) => (
                  <Grid item xs={12} sm={6} key={label}>
                    <Card variant="outlined" sx={{ mb: 2 }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                        <Typography variant="body2">{text}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Your customizations will persist during your session for a consistent experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Paper sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: theme.palette.background.default }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <InfoIcon color="info" sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ color: theme.palette.info.main }}>
                Quick Actions
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Common actions you can perform with selected ideas:
            </Typography>
            <Grid container spacing={2}>
              {['View Details', 'Export', 'Share', 'Group'].map((label) => (
                <Grid item xs={6} sm={3} key={label}>
                  <Chip icon={label === 'View Details' ? <InfoIcon /> : undefined} label={label} sx={{ width: '100%' }} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default HelpPage;
