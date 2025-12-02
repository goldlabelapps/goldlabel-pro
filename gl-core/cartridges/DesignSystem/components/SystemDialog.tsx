// core/gl-core/cartridges/DesignSystem/components/SystemDialog.tsx
'use client';
import * as React from 'react';
import {
  Grid,
  Dialog,
  DialogTitle,
  CardHeader,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useDispatch, useIsMobile, Icon } from '../../../../gl-core';
import {
  useDesignSystem,
  setDesignSystemKey,
  MenuSystem,
} from '../../DesignSystem';

export default function SystemDialog() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const ds = useDesignSystem();
  const { fullScreen } = ds;

  const handleClose = () => {
    dispatch(setDesignSystemKey('dialog', null));
  };

  const toggleFullscreen = () => {
    dispatch(setDesignSystemKey('fullScreen', !fullScreen));
  };

  if (!ds.dialog) return null;

  return (
    <>
      <Dialog
        fullWidth
        fullScreen={isMobile || fullScreen}
        open={Boolean(ds.dialog)}
        onClose={handleClose}
        maxWidth={'sm'}
      >
        <DialogTitle>
          <CardHeader
            action={
              <IconButton color="primary" onClick={toggleFullscreen}>
                <Icon icon="fullscreen" />
              </IconButton>
            }
          />
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <MenuSystem />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <IconButton color="primary" onClick={handleClose}>
            <Icon icon="close" />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
