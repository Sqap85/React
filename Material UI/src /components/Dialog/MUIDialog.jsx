import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
} from '@mui/material';

/**Dialog, kullanıcıya önemli bir bilgi sunmak veya kullanıcıdan bir şeyler almak amacıyla açılan bir pencereyi temsil eder.  */ 

function MUIDialog() {
  // Her bir dialog için ayrı ayrı state'ler
  const [openBasicDialog, setOpenBasicDialog] = useState(false);
  const [openFullScreenDialog, setOpenFullScreenDialog] = useState(false);
  const [openMaxWidthDialog, setOpenMaxWidthDialog] = useState(false);
  const [openTransitionDialog, setOpenTransitionDialog] = useState(false);
  const [openYesNoDialog, setOpenYesNoDialog] = useState(false); // Yes/No dialog state
  const [openDisableBackdropDialog, setOpenDisableBackdropDialog] = useState(false); // Disable backdrop click dialog state
  
  const [openScroolDialog, setOpenScroolDialog] = useState(false);

  // Dialog açma işlemleri
  const handleOpenBasicDialog = () => setOpenBasicDialog(true);
  const handleOpenFullScreenDialog = () => setOpenFullScreenDialog(true);
  const handleOpenMaxWidthDialog = () => setOpenMaxWidthDialog(true);
  const handleOpenTransitionDialog = () => setOpenTransitionDialog(true);
  const handleOpenYesNoDialog = () => setOpenYesNoDialog(true); // Yes/No dialog açma
  const handleOpenDisableBackdropDialog = () => setOpenDisableBackdropDialog(true); // Disable backdrop click dialog açma

  // Dialog kapama işlemleri
  const handleClose = () => {
    setOpenBasicDialog(false);
    setOpenFullScreenDialog(false);
    setOpenMaxWidthDialog(false);
    setOpenTransitionDialog(false);
    setOpenYesNoDialog(false); // Yes/No dialogu kapatma
    setOpenDisableBackdropDialog(false); // Disable backdrop click dialogu kapatma
    setOpenScroolDialog(false);
  };

  // Dialogu submit etme (örneğin form verisi gönderme)
  const handleSubmit = () => {
    alert('Form submitted');
    handleClose(); // Form gönderildikten sonra tüm dialogları kapat
  };

  // Yes/No dialogu için cevap işlemi
  const handleYesNoResponse = (response) => {
    alert(`User selected: ${response}`);
    handleClose(); // Cevap verildikten sonra dialogu kapat
  };

  openScroolDialog

  return (
    <div>
      <h3>Basic Dialog</h3>
      <Button variant="outlined" onClick={handleOpenBasicDialog}>
        Open Basic Dialog
      </Button>

      <Dialog open={openBasicDialog} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog to collect some input.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Your Name" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <h3>Full Screen Dialog</h3>
      <Button variant="outlined" onClick={handleOpenFullScreenDialog}>
        Open Full Screen Dialog
      </Button>
      <Dialog fullScreen open={openFullScreenDialog} onClose={handleClose}>
        <DialogTitle>Full Screen Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dialog takes up the entire screen.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <h3>Dialog with MaxWidth</h3>
      <Button variant="outlined" onClick={handleOpenMaxWidthDialog}>
        Open Max Width Dialog
      </Button>
      <Dialog open={openMaxWidthDialog} onClose={handleClose} maxWidth="sm">
        <DialogTitle>Dialog with Max Width</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dialog has a max-width limit set.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <h3>Dialog with Transition</h3>
      <Button variant="contained" onClick={handleOpenTransitionDialog}>
        Open Dialog with Transition
      </Button>
      <Dialog
        open={openTransitionDialog}
        onClose={handleClose}
        TransitionComponent={React.forwardRef((props, ref) => (
          <div ref={ref} {...props} style={{ transition: 'all 0.3s ease-in-out' }} />
        ))}
      >
        <DialogTitle>Dialog with Transition</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dialog has a transition effect applied.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <h3>Dialog with DisableBackdropClick (Prevent Close on Background Click)</h3>
      <Button variant="outlined" onClick={handleOpenDisableBackdropDialog}>
        Open Dialog with Disable Backdrop Close
      </Button>
      <Dialog
        open={openDisableBackdropDialog}
        onClose={(e, reason) => {
          if (reason === 'backdropClick') return; // Arka planda tıklanarak kapanmasını engeller
          handleClose();
        }}
      >
        <DialogTitle>Dialog with Disable Backdrop Close</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dialog cannot be closed by clicking on the backdrop.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <h3>Yes/No Dialog</h3>
      <Button variant="outlined" onClick={handleOpenYesNoDialog}>
        Open Yes/No Dialog
      </Button>
      <Dialog open={openYesNoDialog} onClose={handleClose}>
        <DialogTitle>Do you agree?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please confirm if you agree with the terms and conditions.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleYesNoResponse('No')} color="secondary">
            No
          </Button>
          <Button onClick={() => handleYesNoResponse('Yes')} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>


      <h3>Dialog with Scrollable Content</h3>
<Button variant='contained' onClick={setOpenScroolDialog}>
  Open Dialog with Scrollable Content
</Button>
<Dialog open={openScroolDialog} onClose={handleClose} scroll="paper">
  <DialogTitle>Dialog with Scrollable Content</DialogTitle>
  <DialogContent>
    <DialogContentText>
      This dialog contains a lot of text so you can scroll through it.
    </DialogContentText>
    <div style={{ height: '300px', overflowY: 'auto' }}>
      {/* Bu alanda uzun içerik ile kaydırma örneği */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>


    </div>
  );
}

export default MUIDialog;
