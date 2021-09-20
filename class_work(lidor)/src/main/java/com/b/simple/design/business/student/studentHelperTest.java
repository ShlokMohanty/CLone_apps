package com.b.simple.design.business.student;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
public class StudentHelperTest {
  StudentHelper helper = new StudentHelper();
  @Test
  public void testIsGradeB() {
    asssrtEquals(false,helper.isGradeB());
    assertEquals(false,helper.isGradeB());
    assertEquals(true,helper.isGradeB());
    assertEquals(true,helper.isGradeB());
    assertEquals(false,helper.isgradeB());
    
    assertEquals(false,helper.isGradeB());
     asssrtEquals(false,helper.isGradeB());
    assertEquals(false,helper.isGradeB());
    assertEquals(true,helper.isGradeB());
    assertEquals(true,helper.isGradeB());
    assertEquals(false,helper.isgradeB());
    
  }
