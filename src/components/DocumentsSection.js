import React from 'react';
import _ from 'lodash';

import {getData, classNames, toStyleObj, withPrefix} from '../utils';
import Title from 'antd/lib/typography/Title';
import { Collapse, Radio } from 'antd';
import Document from './Document';

const { Panel } = Collapse;

export default class DocumentsSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeMenu: 'General'
      };
    }

    handleOnChange = (e) => {
      this.setState({ activeMenu: e.target.value })
    }

    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null);
        let background_color = _.get(background, 'background_color', null) || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size', null) || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';

        return (
            <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
              {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
              <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
              )}
              <div className="container container--lg">
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
                  {_.get(section, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
                    {/* DOCUMENTS NAV HERE */}
                    {_.map(_.get(section, 'documents', null), (slide, slide_idx) => {
                      let slide_data = getData(this.props.pageContext.site.data, slide);
                      console.log(slide_data);
                      return (
                        slide_data.year === this.state.activeMenu && <Collapse key={slide_idx}>
                         {slide_data.types.map((type, idx) => (
                           <Panel header={type.type} key={idx}>
                             {type.files.map((file, id) => (
                               <li key={id}>
                                 {/* <a href={withPrefix(file.path)} target = "_blank" rel="noreferrer">{file.label}</a> */}
                                 <Document document={file}/>
                                </li>
                             ))}
                           </Panel>
                         ))}
                        </Collapse>
                      )
                  })}

                  </div>
                  )}
                  {/* NAVIGATION BUTTONS HERE */}
                  <div className="cell section__body">
                    {_.get(section, 'title', null) && (
                    <Title className="section__title">{_.get(section, 'title', null)}</Title>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group" style={{ display: 'block' }}>
                      <Radio.Group defaultValue={this.state.activeMenu} buttonStyle="solid" onChange={this.handleOnChange} style={{ display: 'block' }}>
                        {_.get(section, 'actions', null).map((action, idx) => (
                          <Radio.Button key={idx} value={action.label} style={{ display: 'block', margin: '0.5rem 0' }}>{action.label}</Radio.Button>
                        ))}
                      </Radio.Group>
                    </div>
                    )}
                  </div>
                  <div>
                  
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
