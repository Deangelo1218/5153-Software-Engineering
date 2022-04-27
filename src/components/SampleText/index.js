// import React from 'react'
// import { Column2, Img, ImgWrap, InfoContainer, InforWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtilte, Column1} from './SampleElements'
// import { Button } from '../ButtonElement'



// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <InfoContainer>
//       <InforWrapper>
//           <InfoRow >
//               <Column1>
//               <TextWrapper>
//                   <TopLine>ONE TWO THREE</TopLine>
//                   <Heading >Heyyy</Heading>
//                   <Subtilte>OKOKOKOKOK</Subtilte>
//                   <form onSubmit={this.handleSubmit}>
//                     <label>
//                       Name:
//                       <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                     </form> 
//               </TextWrapper>
              
//               </Column1>
//               <Column2>
//                   <ImgWrap>
//                   <Img src='../../images/sample.jpg'/>
//                   </ImgWrap>
//               </Column2>
//           </InfoRow>

//       </InforWrapper>
//   </InfoContainer>      
//     );
//   }
// }

// export default NameForm;
