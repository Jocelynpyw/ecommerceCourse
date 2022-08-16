import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CourseItem from '../components/CourseItem';
import EmptyMsg from '../components/EmptyMsg';

const Landing = () => {
  const existingCourses = useSelector(state => state.courses.existingCourses);
  if (existingCourses.length) {
    return (
      <FlatList
        data={existingCourses}
        renderItem={({item}) => (
          <CourseItem
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
      />
    );
  }
  return <EmptyMsg text="Pas de Cours a Afficher" />;
};
// const styles = StyleSheet.create({});
export default Landing;
