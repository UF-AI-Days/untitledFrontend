import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Canvas from '../../Canvas';

import { styled } from '@mui/system';

const image_sources = ["hurricaneSandy-1.jpg","logo192.png","logo512.png"]
const CustomSlider = styled(Slider)(() => ({
    color: "#240090",
    "& .MuiSlider-thumb": {
      backgroundColor: "#3500D3" 
    },
}));

const ImageSlider  = ({images,width,height}) => {
    const [imageIndex, setImageIndex] = useState(0);

    //console.log(images)
    
    return (  

        <div className="ImageSlider">
            <Grid
                container
                direction="column"
                justifyContent="center"
            >
                <Grid item>
                    <Canvas
			width = {width}
			height = {height}
			draw = {(context) => {
			    context.clearRect(0,0,width,height)
			    
			    if(images){
				context.globalAlpha = 1
				context.drawImage(images[ Math.floor(imageIndex) ],0,0)
				context.globalAlpha = imageIndex - Math.floor(imageIndex)
				context.drawImage(images[ Math.min(images.length -1, Math.ceil(imageIndex)) ],0,0)
				
			    }

			    
			}}
		    />
                </Grid>
                
                <Grid item>
                    <Box sx={{ width: {width} }}>
                        <Slider
                            aria-label="Year"
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={.01}
                            min={0}
                            max={images ? images.length-1 : 0}
                            onChange={(e,value,activeThumb) => { setImageIndex(value) }}
                        />
                    </Box>
                </Grid>
            </Grid>
	    </div>
    )
}

export default ImageSlider

/*
<Grid item>
    <Box sx={{ width: 300 }}>
        <Slider
            aria-label="Year"
            defaultValue={0}
            getAriaValueText={"valuetext"}
            valueLabelDisplay="auto"
            step={10}
            min={0}
            max={image_sources.length*10}
        />
    </Box>
</Grid>*/