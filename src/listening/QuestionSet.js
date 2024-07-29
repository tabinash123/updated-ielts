import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Title, Paragraph, Text } = Typography;

const QuestionSet = ({ data }) => {
  const startQuestion = data.notes[0].items[0].details.find(d => d.type === 'input' || d.input)?.questionNo || data.notes[0].items[0].details[0].input?.questionNo;
  const endQuestion = data.notes[data.notes.length - 1].items[0].details[data.notes[data.notes.length - 1].items[0].details.length - 1].input?.questionNo || data.notes[data.notes.length - 1].items[0].details[data.notes[data.notes.length - 1].items[0].details.length - 1].questionNo;

  const renderNoteCompletion = () => {
    return data.notes.map((note, noteIndex) => (
      <NoteSection key={noteIndex}>
        <NoteTitle>{note.title}:</NoteTitle>
        {note.items.map((item, itemIndex) => (
          <NoteItem key={itemIndex}>
            <Prefix>{item.prefix}</Prefix>
            <DetailsList>
              {item.details.map((detail, detailIndex) => (
                <DetailItem key={detailIndex}>
                  {detail.type === 'text' && (
                    <>
                      <Text>{detail.value} </Text>
                      {detail.input && (
                        <Input 
                          placeholder={detail.input.questionNo.toString()} 
                          style={{ width: 120 }} 
                        />
                      )}
                      {detail.input && detail.input.suffix && <Text> {detail.input.suffix}</Text>}
                    </>
                  )}
                  {detail.type === 'input' && (
                    <>
                      <Input 
                        placeholder={detail.questionNo.toString()} 
                        style={{ width: 120 }} 
                      />
                      {detail.suffix && <Text> {detail.suffix}</Text>}
                    </>
                  )}
                </DetailItem>
              ))}
            </DetailsList>
          </NoteItem>
        ))}
      </NoteSection>
    ));
  };

  return (
    <div>
      <Title level={3}>Questions {startQuestion}–{endQuestion}</Title>
      <Paragraph>{data.instruction}</Paragraph>
      <Title level={4}>{data.title}</Title>
      {renderNoteCompletion()}
    </div>
  );
};

const NoteSection = styled.div`
  margin-bottom: 20px;
`;

const NoteTitle = styled(Text)`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const NoteItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Prefix = styled(Text)`
  min-width: 120px;
  font-weight: bold;
`;

const DetailsList = styled.div`
  flex: 1;
`;

const DetailItem = styled.div`
  margin-bottom: 5px;
  &:before {
    content: "- ";
    margin-right: 5px;
  }
`;

export default QuestionSet;