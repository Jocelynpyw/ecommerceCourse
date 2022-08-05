import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CourseItem from '../components/CourseItem';

const Landing = () => {
  const existingCourses = useSelector(state => state.courses.existingCourses);
  return (
    <FlatList
      data={existingCourses}
      renderItem={({item}) => (
        <CourseItem image={item.image} title={item.title} price={item.price} />
      )}
    />
  );
};
// const styles = StyleSheet.create({});
export default Landing;
