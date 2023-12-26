import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { styled } from '@mui/material/styles';
import theme from '../constants/theme';
import { ThemeProvider} from "@mui/material";

const StyledCheck = styled(Favorite)(({ theme }) => ({
    color: `${theme.palette.secondary.main}`,
  }));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<StyledCheck />} />
    </div>
    </ThemeProvider>
  );
}
