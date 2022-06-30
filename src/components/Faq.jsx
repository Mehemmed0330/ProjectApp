import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Faq() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="p-4 bg-yellow-300">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ border: "1px solid black" }} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold ">Bi Şoför Nedir?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium 	">
                        Bi Şoför, araç sahibi kişilere, kendi araçlarını kullanmak istemedikleri durumlarda, bulundukları yerden gidecekleri yere, deneyimli, yol bilgisine sahip, uzman şoförlerimiz ile saatlik ya da günlük özel Bi Şoför hizmeti sunan akıllı bir uygulamadır.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold ">
                        Bi Şoför’e nasıl kayıt olabilirim?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium 	">
                        Bi Şoför uygulamasını App Store’dan, Android Google Play’den ücretsiz olarak indirebilirsiniz. Uygulamayı indirdikten sonra telefon numaranız ile üye olup uygulamayı kullanabilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Bi Şoför nasıl olabilirim?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Bi Şoför olmak için, uygulamada “Bi Şoför ol” konu başlığındaki Başvuru Formu’nu doldurarak veya info@bisofor.com adresine başvurunuzu ve CV’nizi göndererek yapabilirsiniz
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Bi Şoför nasıl kullanılır? Bulunduğum yere nasıl Bi Şoför çağırabilirim?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Bi Şoför, App Store ya da Android Google Play’ den indirdikten sonra telefon numaranız ve kişisel bilgileriniz ile kayıtlarınızı yapıp konum servislerinizi açtıktan sonra bulunduğunuz yere kolaylıkla Bi Şoför çağırabilirsiniz
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Ödemeyi nasıl yapabilirim?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Ödemeler banka ya da kredi kartı ile yapılır. Banka/kredi kartı bilgileriniz Master Card ödeme alt yapısı Masterpass tarafından korunur. Talebinizi onayladığınızda yolculuk tutarı otomatik olarak kartınızdan çekilir. Uzayan yolculuklarda ekstra olarak hesaplanır ve ikinci bir onay alınarak uzayan yolculuk başladığında hesablanan tutar çekilir.                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Kişisel bilgilerim güvende mi?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Kişisel bilgileriniz KVKK kapsamında korunur, şirketimiz dahil hiç kimse ile paylaşılmaz, kişisel bilgilerinizi ve ödeme bilgilerinizi kimse göremez. Bu bilgiler MasterCard ve KVKK kapsamında korunur, şirket yetkilileri dahil kimse erişemez.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Bi Şoför uygulamasını şehir içi/şehir dışı kullanabilir miyim?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Bi Şoför uygulaması şehir içi ve şehir dışı hizmet veren bir uygulamadır.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Bi Şoför ile her saat şoför çağırabilir miyim?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Bi Şoför uygulaması 7/24 hizmet vermektedir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ border: "1px solid black", borderTop: "0px" }} >
                <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" style={{ backgroundColor: "rgb(253,224,71)" }} >
                    <Typography className="text-black font-bold	">Günlük ya da saatlik hizmet veriyor musunuz?</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-black">
                    <Typography className="text-yellow-300 font-medium	">
                        Bi Şoför uygulaması günlük ya da saatlik özel şoför hizmeti vermektedir.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
