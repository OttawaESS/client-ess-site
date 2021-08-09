import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';
import Title from 'antd/lib/typography/Title';
import { Collapse, Radio } from 'antd';
import {getData} from '../utils';

const { Panel } = Collapse;

export default class DocumentsSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeMenu: 'General'
      };
    }

    handleOnChange = (e) => {
      // console.log(e);
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
        let text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `
        const docs = _.get(section, 'documents', null)
        console.log(docs);

        // let year = _.get(section, 'documents', null)

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
                    {/* <Collapse defaultActiveKey={['1']}>
                      <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                      </Panel>
                    </Collapse> */}
                    {_.map(_.get(section, 'documents', null), (slide, slide_idx) => {
                      let slide_data = getData(this.props.pageContext.site.data, slide);
                      console.log(slide_data);
                      return (
                        slide_data.year === this.state.activeMenu && <Collapse>
                         {slide_data.types.map((type, idx) => (
                           <Panel header={type.type}>
                             {type.files.map((file, id) => (
                               <li>{file.label}</li>
                             ))}
                           </Panel>
                         ))}
                        </Collapse>
                      )
                  })}

                  </div>
                  )}
                  <div className="cell section__body">
                    {_.get(section, 'title', null) && (
                    <Title className="section__title">{_.get(section, 'title', null)}</Title>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      {/* <SectionActions {...this.props} actions={_.get(section, 'actions', null)} /> */}
                      <Radio.Group defaultValue={this.state.activeMenu} buttonStyle="solid" onChange={this.handleOnChange}>
                        {_.get(section, 'actions', null).map((action, idx) => (
                          <Radio.Button key={idx} value={action.label}>{action.label}</Radio.Button>
                        ))}
                      </Radio.Group>
                    </div>
                    )}
                    {/* NAVIGATION BUTTONS HERE */}
                  </div>
                  <div>
                  
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
